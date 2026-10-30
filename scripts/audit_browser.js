import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9222;

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
    this.events = [];
    this.consoleLogs = [];
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
        } else if (data.method) {
          if (data.method === 'Runtime.consoleAPICalled') {
            this.consoleLogs.push({
              type: data.params.type,
              args: data.params.args.map(a => a.value ?? a.description)
            });
          } else if (data.method === 'Runtime.exceptionThrown') {
            this.consoleLogs.push({
              type: 'error',
              exception: data.params.exceptionDetails
            });
          }
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

async function runAudit() {
  console.log('🚀 Spawning Chrome...');
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=1440,900',
    'about:blank'
  ], { stdio: 'ignore' });

  try {
    let version = null;
    for (let i = 0; i < 20; i++) {
      try {
        version = await httpGet(`http://127.0.0.1:${PORT}/json/version`);
        if (version) break;
      } catch (e) {
        await sleep(250);
      }
    }

    if (!version) throw new Error('Chrome failed to start');

    const targets = await httpGet(`http://127.0.0.1:${PORT}/json/list`);
    const pageTarget = targets.find(t => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found');

    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('DOM.enable');

    console.log('🧭 Navigating to http://localhost:3000 ...');
    await client.send('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(2000); // Wait for load and animation

    // 1. Check Console Logs & Errors
    console.log('\n--- BROWSER CONSOLE LOGS ---');
    if (client.consoleLogs.length === 0) {
      console.log('No console errors or logs.');
    } else {
      for (const log of client.consoleLogs) {
        console.log(`[${log.type.toUpperCase()}]`, log.args || log.exception);
      }
    }

    // 2. Evaluate DOM and layout metrics in page
    const auditRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const issues = [];
        // Check horizontal overflow
        const docWidth = document.documentElement.clientWidth;
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          const rect = el.getBoundingClientRect();
          if (rect.right > docWidth + 2) {
            issues.push({
              type: 'HORIZONTAL_OVERFLOW',
              tag: el.tagName,
              className: (el.className || '').toString().slice(0, 80),
              right: rect.right,
              docWidth
            });
          }
        }

        // Check broken images
        const imgs = Array.from(document.querySelectorAll('img'));
        const brokenImgs = imgs.filter(img => !img.complete || img.naturalWidth === 0).map(img => ({
          src: img.src,
          alt: img.alt
        }));

        // Check section IDs
        const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'engineering', 'contact'];
        const missingSections = sections.filter(id => !document.getElementById(id));

        return {
          totalElements: allElements.length,
          docWidth,
          overflowCount: issues.length,
          topOverflows: issues.slice(0, 5),
          brokenImgs,
          missingSections
        };
      })()`,
      returnByValue: true
    });

    console.log('\n--- DOM AUDIT METRICS ---');
    console.log(JSON.stringify(auditRes.result.value, null, 2));

    // 3. Take screenshots of key sections (Desktop 1440x900)
    fs.mkdirSync('/tmp/audit_screens', { recursive: true });

    async function captureElement(selector, filename) {
      const evalBox = await client.send('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('${selector}');
          if (!el) return null;
          el.scrollIntoView({ behavior: 'instant', block: 'start' });
          const rect = el.getBoundingClientRect();
          return { x: window.scrollX, y: window.scrollY, width: window.innerWidth, height: window.innerHeight };
        })()`,
        returnByValue: true
      });
      await sleep(600); // allow scroll / transition settle
      const shot = await client.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join('/tmp/audit_screens', filename), Buffer.from(shot.data, 'base64'));
      console.log(`📸 Captured ${filename}`);
    }

    await captureElement('#hero', 'desktop_hero.png');
    await captureElement('#about', 'desktop_about.png');
    await captureElement('#experience', 'desktop_experience.png');
    await captureElement('#projects', 'desktop_projects.png');
    await captureElement('#gallery', 'desktop_gallery.png');
    await captureElement('#skills', 'desktop_skills.png');
    await captureElement('#engineering', 'desktop_engineering.png');
    await captureElement('#contact', 'desktop_contact.png');

    // 4. Test Mobile Viewport (390x844)
    console.log('\n📱 Testing Mobile Viewport (390x844)...');
    await client.send('Runtime.evaluate', { expression: 'window.scrollTo(0, 0)' });
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await sleep(600);

    const mobileAuditRes = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const docWidth = document.documentElement.clientWidth;
        const issues = [];
        const allElements = document.querySelectorAll('*');
        for (const el of allElements) {
          // Ignore items inside a horizontal scroll container or carousel
          if (el.closest('[style*="overflow"], .overflow-x-auto, .overflow-hidden, #gallery')) continue;
          const rect = el.getBoundingClientRect();
          if (rect.right > docWidth + 2) {
            issues.push({
              type: 'MOBILE_OVERFLOW',
              tag: el.tagName,
              className: (el.className || '').toString().slice(0, 80),
              right: rect.right,
              docWidth
            });
          }
        }
        return {
          docWidth,
          overflowCount: issues.length,
          topOverflows: issues.slice(0, 5)
        };
      })()`,
      returnByValue: true
    });

    console.log('Mobile DOM metrics:', JSON.stringify(mobileAuditRes.result.value, null, 2));

    await captureElement('#hero', 'mobile_hero.png');
    await captureElement('#about', 'mobile_about.png');
    await captureElement('#experience', 'mobile_experience.png');
    await captureElement('#projects', 'mobile_projects.png');
    await captureElement('#skills', 'mobile_skills.png');
    await captureElement('#contact', 'mobile_contact.png');

    client.close();
  } finally {
    chromeProc.kill('SIGKILL');
  }
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
