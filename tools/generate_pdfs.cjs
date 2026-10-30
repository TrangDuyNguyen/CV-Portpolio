const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = process.env.CHROME_PATH || (
  process.platform === 'darwin'
    ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    : (process.platform === 'win32'
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
        : 'google-chrome')
);

async function generatePdfForLang(lang, outputPath) {
  const filePath = 'file:///' + path.resolve(__dirname, '../cv-print.html').replace(/\\/g, '/') + '?lang=' + lang;
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    filePath
  ]);

  await new Promise(r => setTimeout(r, 1500));

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list').then(r => r.json());
    const target = listRes.find(t => t.type === 'page');
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    let id = 1;
    function sendCommand(method, params = {}) {
      return new Promise((resolve) => {
        const cmdId = id++;
        const handler = (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === cmdId) {
            ws.removeEventListener('message', handler);
            resolve(msg.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: cmdId, method, params }));
      });
    }

    // Explicitly set language in DOM
    await sendCommand('Runtime.evaluate', { expression: `setLanguage('${lang}', false)` });
    await new Promise(r => setTimeout(r, 500));

    // Wait for fonts to be ready
    await sendCommand('Runtime.evaluate', { expression: 'document.fonts.ready' });

    // Print to PDF
    const pdfRes = await sendCommand('Page.printToPDF', {
      landscape: false,
      displayHeaderFooter: false,
      printBackground: true,
      preferCSSPageSize: true,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0
    });

    const buffer = Buffer.from(pdfRes.data, 'base64');
    fs.writeFileSync(outputPath, buffer);
    console.log(`Generated ${outputPath} (${buffer.length} bytes)`);

    ws.close();
  } finally {
    chrome.kill();
  }
}

async function main() {
  const publicDir = path.resolve(__dirname, '../public');
  const rootDir = path.resolve(__dirname, '..');

  const viTarget = path.resolve(publicDir, 'Mobile_Engineer_Nguyen_Duy_Trang.pdf');
  const enTarget = path.resolve(publicDir, 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf');

  console.log('Generating VI PDF...');
  await generatePdfForLang('vi', viTarget);

  console.log('Generating EN PDF...');
  await generatePdfForLang('en', enTarget);

  // Sync to copies
  fs.copyFileSync(viTarget, path.resolve(publicDir, 'Mobile Engineer_Nguyen Duy Trang.pdf'));
  fs.copyFileSync(viTarget, path.resolve(publicDir, 'cv.pdf'));
  fs.copyFileSync(viTarget, path.resolve(rootDir, 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'));
  fs.copyFileSync(viTarget, path.resolve(rootDir, 'Mobile Engineer_Nguyen Duy Trang.pdf'));

  fs.copyFileSync(enTarget, path.resolve(publicDir, 'Mobile Engineer_Nguyen Duy Trang_EN.pdf'));
  fs.copyFileSync(enTarget, path.resolve(publicDir, 'cv_en.pdf'));
  fs.copyFileSync(enTarget, path.resolve(rootDir, 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf'));
  fs.copyFileSync(enTarget, path.resolve(rootDir, 'Mobile Engineer_Nguyen Duy Trang_EN.pdf'));

  const distDir = path.resolve(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    fs.copyFileSync(viTarget, path.resolve(distDir, 'Mobile_Engineer_Nguyen_Duy_Trang.pdf'));
    fs.copyFileSync(viTarget, path.resolve(distDir, 'Mobile Engineer_Nguyen Duy Trang.pdf'));
    fs.copyFileSync(viTarget, path.resolve(distDir, 'cv.pdf'));

    fs.copyFileSync(enTarget, path.resolve(distDir, 'Mobile_Engineer_Nguyen_Duy_Trang_EN.pdf'));
    fs.copyFileSync(enTarget, path.resolve(distDir, 'Mobile Engineer_Nguyen Duy Trang_EN.pdf'));
    fs.copyFileSync(enTarget, path.resolve(distDir, 'cv_en.pdf'));
  }

  console.log('All PDF files synced successfully!');
}

main();
