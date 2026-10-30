import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9242;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function httpGet(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(data); }
      });
    }).on('error', reject);
  });
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.callbacks = new Map();
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = err => reject(err);
      this.ws.onmessage = msg => {
        const data = JSON.parse(msg.data);
        if (data.id && this.callbacks.has(data.id)) {
          const { res, rej } = this.callbacks.get(data.id);
          this.callbacks.delete(data.id);
          if (data.error) rej(data.error);
          else res(data.result);
        }
      };
    });
  }

  send(method, params = {}) {
    return new Promise((res, rej) => {
      const id = this.id++;
      this.callbacks.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    this.ws.close();
  }
}

async function run() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-test-en-legacy-'));
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${tmpDir}`,
    'about:blank'
  ]);

  try {
    let connected = false;
    for (let i = 0; i < 30; i++) {
      await sleep(200);
      try {
        await httpGet(`http://127.0.0.1:${PORT}/json/version`);
        connected = true;
        break;
      } catch (e) {}
    }

    if (!connected) throw new Error('Could not connect to Chrome CDP');

    const targets = await httpGet(`http://127.0.0.1:${PORT}/json/list`);
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found');

    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('DOM.enable');

    console.log('1. Setting up LEGACY stale state in browser: portfolio_lang = "vi" ...');
    await client.send('Page.navigate', { url: 'http://localhost:3000/' });
    await sleep(800);
    // Explicitly simulate an existing visitor who had 'portfolio_lang' = 'vi' stored
    await client.send('Runtime.evaluate', {
      expression: `localStorage.setItem('portfolio_lang', 'vi');`
    });

    console.log('2. Reloading page to test if legacy "vi" is overridden and defaults to English...');
    await client.send('Page.navigate', { url: 'http://localhost:3000/' });
    await sleep(1500);

    const check1 = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const lang = document.documentElement.lang;
        const title = document.title;
        const navbarBtn = document.querySelector('header button[aria-label]')?.textContent?.trim();
        const heroViewCv = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.textContent?.trim();
        const cvHref = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.getAttribute('href');
        const legacyKeyStillExists = localStorage.getItem('portfolio_lang') !== null;
        return { lang, title, navbarBtn, heroViewCv, cvHref, legacyKeyStillExists };
      })()`,
      returnByValue: true
    });

    console.log('Main Page Legacy Check Result:', JSON.stringify(check1.result.value, null, 2));
    const val1 = check1.result.value;

    if (val1.lang !== 'en') {
      throw new Error(`Expected lang === 'en', got '${val1.lang}'`);
    }
    if (!val1.heroViewCv.includes('View CV')) {
      throw new Error(`Expected 'View CV', got '${val1.heroViewCv}'`);
    }
    if (!val1.cvHref.includes('EN.pdf')) {
      throw new Error(`Expected English PDF href, got '${val1.cvHref}'`);
    }
    if (val1.legacyKeyStillExists) {
      throw new Error(`Stale 'portfolio_lang' key was not cleaned up!`);
    }

    console.log('✅ Main Portfolio correctly overrides legacy storage and defaults to English & EN CV!');

    console.log('3. Navigating to cv-print.html to verify CV viewing and downloading defaults to English...');
    await client.send('Page.navigate', { url: 'http://localhost:3000/cv-print.html' });
    await sleep(1000);

    const cvCheck = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const lang = document.documentElement.lang;
        const bodyLang = document.body.getAttribute('data-lang');
        const title = document.title;
        const rootEnDisplay = window.getComputedStyle(document.getElementById('cvRootEN')).display;
        const rootViDisplay = window.getComputedStyle(document.getElementById('cvRootVI')).display;
        const downloadHref = document.getElementById('btnDownloadPdf')?.getAttribute('href');
        const downloadFilename = document.getElementById('btnDownloadPdf')?.getAttribute('download');
        const downloadText = document.getElementById('btnPdfText')?.textContent?.trim();
        const activeLangBtn = document.querySelector('.btn-lang.active')?.textContent?.trim();
        return {
          lang,
          bodyLang,
          title,
          rootEnDisplay,
          rootViDisplay,
          downloadHref,
          downloadFilename,
          downloadText,
          activeLangBtn
        };
      })()`,
      returnByValue: true
    });

    console.log('cv-print.html Check Result:', JSON.stringify(cvCheck.result.value, null, 2));
    const cvVal = cvCheck.result.value;

    if (cvVal.bodyLang !== 'en') {
      throw new Error(`Expected body data-lang === 'en', got '${cvVal.bodyLang}'`);
    }
    if (cvVal.rootEnDisplay === 'none') {
      throw new Error(`English CV root (cvRootEN) is hidden!`);
    }
    if (cvVal.rootViDisplay !== 'none') {
      throw new Error(`Vietnamese CV root (cvRootVI) is visible by default!`);
    }
    if (!cvVal.downloadHref.includes('EN.pdf')) {
      throw new Error(`Download button must point to English PDF, got '${cvVal.downloadHref}'`);
    }
    if (!cvVal.downloadFilename.includes('EN.pdf')) {
      throw new Error(`Download filename must be EN.pdf, got '${cvVal.downloadFilename}'`);
    }
    if (cvVal.activeLangBtn !== 'English') {
      throw new Error(`Expected active language button 'English', got '${cvVal.activeLangBtn}'`);
    }

    console.log('✅ cv-print.html is 100% defaulted to English view & download!');

    client.close();
  } finally {
    chromeProc.kill('SIGKILL');
    await sleep(300);
    try {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    } catch (e) {}
  }
}

run().catch(err => {
  console.error('TEST FAILED:', err);
  process.exit(1);
});
