import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9240;

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
        } else if (data.method === 'Runtime.consoleAPICalled') {
          this.consoleLogs.push({
            type: data.params.type,
            args: data.params.args.map(a => a.value ?? a.description)
          });
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
  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${PORT}`,
    '--disable-gpu',
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
        await sleep(200);
      }
    }

    const targets = await httpGet(`http://127.0.0.1:${PORT}/json/list`);
    const pageTarget = targets.find(t => t.type === 'page');
    const client = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await client.connect();

    await client.send('Page.enable');
    await client.send('Runtime.enable');

    console.log('Navigating to http://localhost:3000 ...');
    await client.send('Page.navigate', { url: 'http://localhost:3000' });
    await sleep(2000);

    // 1. Capture video in #projects
    await client.send('Runtime.evaluate', {
      expression: 'document.querySelector("#projects video").scrollIntoView({ behavior: "instant", block: "center" })'
    });
    await sleep(600);
    let shot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/tmp/audit_screens/video_compact.png', Buffer.from(shot.data, 'base64'));
    console.log('📸 Captured video_compact.png');

    // 2. Capture Gallery (initial state)
    await client.send('Runtime.evaluate', {
      expression: 'document.querySelector("#gallery").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await sleep(600);
    shot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/tmp/audit_screens/gallery_chplay_t0.png', Buffer.from(shot.data, 'base64'));
    console.log('📸 Captured gallery_chplay_t0.png');

    // 3. Wait 1.5s to verify auto-scroll progress
    await sleep(1500);
    const scrollInfo = await client.send('Runtime.evaluate', {
      expression: '(() => { const c = document.querySelector("#gallery div[style*=\"scrollBehavior\"]"); return { scrollLeft: c ? c.scrollLeft : 0 }; })()',
      returnByValue: true
    });
    console.log('Auto-scroll position after 1.5s:', scrollInfo.result.value);

    shot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/tmp/audit_screens/gallery_chplay_t1.png', Buffer.from(shot.data, 'base64'));
    console.log('📸 Captured gallery_chplay_t1.png');

    // 4. Test Mobile Viewport (390x844)
    console.log('Testing mobile layout...');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await sleep(500);

    await client.send('Runtime.evaluate', {
      expression: 'document.querySelector("#projects video").scrollIntoView({ behavior: "instant", block: "center" })'
    });
    await sleep(600);
    shot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/tmp/audit_screens/mobile_video_compact.png', Buffer.from(shot.data, 'base64'));
    console.log('📸 Captured mobile_video_compact.png');

    await client.send('Runtime.evaluate', {
      expression: 'document.querySelector("#gallery").scrollIntoView({ behavior: "instant", block: "start" })'
    });
    await sleep(600);
    shot = await client.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync('/tmp/audit_screens/mobile_gallery_chplay.png', Buffer.from(shot.data, 'base64'));
    console.log('📸 Captured mobile_gallery_chplay.png');

    client.close();
  } finally {
    chromeProc.kill('SIGKILL');
  }
}

run().catch(console.error);

