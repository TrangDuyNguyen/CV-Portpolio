import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const pdfDownloadPlugin = (): Plugin => ({
  name: 'pdf-download-headers',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split('?')[0] || '';
      if (url.endsWith('.pdf')) {
        res.setHeader('Content-Disposition', 'attachment; filename="Mobile_Engineer_Nguyen_Duy_Trang.pdf"');
        res.setHeader('Content-Type', 'application/pdf');
      }
      next();
    });
  },
});

export default defineConfig({
  plugins: [react(), pdfDownloadPlugin()],
  server: {
    port: 3000,
    open: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: resolve(__dirname, 'cv-print.html'),
      },
    },
  },
});


