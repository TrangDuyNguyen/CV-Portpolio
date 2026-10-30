import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9241;

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
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-test-en-'));
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

    console.log('1. Navigating to http://localhost:3000/ (Fresh Session, Empty Storage)...');
    await client.send('Page.navigate', { url: 'http://localhost:3000/' });
    await sleep(1500);

    // Evaluate Default Language
    const initialCheck = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const lang = document.documentElement.lang;
        const title = document.title;
        const navbarBtn = document.querySelector('header button[aria-label]')?.textContent?.trim();
        const heroViewCv = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.textContent?.trim();
        const cvHref = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.getAttribute('href');
        const headline = document.querySelector('h2')?.textContent?.trim();
        return { lang, title, navbarBtn, heroViewCv, cvHref, headline };
      })()`,
      returnByValue: true
    });

    console.log('Initial State Check:', JSON.stringify(initialCheck.result.value, null, 2));

    const state1 = initialCheck.result.value;
    if (state1.lang !== 'en') {
      throw new Error(`Expected document.documentElement.lang === 'en', got '${state1.lang}'`);
    }
    if (!state1.title.includes('Nguyen Duy Trang')) {
      throw new Error(`Expected title to contain 'Nguyen Duy Trang', got '${state1.title}'`);
    }
    if (!state1.heroViewCv.includes('View CV')) {
      throw new Error(`Expected CV button to be 'View CV', got '${state1.heroViewCv}'`);
    }
    if (!state1.cvHref.includes('EN.pdf')) {
      throw new Error(`Expected CV href to point to English PDF, got '${state1.cvHref}'`);
    }

    console.log('✅ Default English State VERIFIED successfully!');

    // Toggle to Vietnamese
    console.log('2. Clicking language toggle button to test Vietnamese switch...');
    await client.send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('header button');
        if (btn) btn.click();
      })()`,
      returnByValue: true
    });
    await sleep(500);

    const viCheck = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const lang = document.documentElement.lang;
        const title = document.title;
        const heroViewCv = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.textContent?.trim();
        const cvHref = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.getAttribute('href');
        return { lang, title, heroViewCv, cvHref };
      })()`,
      returnByValue: true
    });

    console.log('Vietnamese State Check:', JSON.stringify(viCheck.result.value, null, 2));
    const state2 = viCheck.result.value;
    if (state2.lang !== 'vi') {
      throw new Error(`Expected document.documentElement.lang === 'vi', got '${state2.lang}'`);
    }
    if (!state2.title.includes('Nguyễn Duy Trang')) {
      throw new Error(`Expected title in VI, got '${state2.title}'`);
    }
    if (!state2.heroViewCv.includes('Xem CV')) {
      throw new Error(`Expected CV button to be 'Xem CV', got '${state2.heroViewCv}'`);
    }

    console.log('✅ Vietnamese toggle VERIFIED successfully!');

    // Toggle back to English
    console.log('3. Clicking language toggle button back to English...');
    await client.send('Runtime.evaluate', {
      expression: `(() => {
        const btn = document.querySelector('header button');
        if (btn) btn.click();
      })()`,
      returnByValue: true
    });
    await sleep(500);

    const enBackCheck = await client.send('Runtime.evaluate', {
      expression: `(() => {
        return {
          lang: document.documentElement.lang,
          title: document.title,
          heroViewCv: Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('CV'))?.textContent?.trim()
        };
      })()`,
      returnByValue: true
    });
    console.log('Back to EN Check:', JSON.stringify(enBackCheck.result.value, null, 2));
    if (enBackCheck.result.value.lang !== 'en') {
      throw new Error('Failed to toggle back to English');
    }
    console.log('✅ Bidirectional toggle back to English VERIFIED!');

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
