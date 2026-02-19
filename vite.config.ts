import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, existsSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-api-files',
      closeBundle() {
        const apiDir = resolve(__dirname, 'dist/api');
        if (!existsSync(apiDir)) {
          mkdirSync(apiDir, { recursive: true });
        }
        copyFileSync(
          resolve(__dirname, 'api/contact-submit.php'),
          resolve(__dirname, 'dist/api/contact-submit.php')
        );
        copyFileSync(
          resolve(__dirname, 'api/test-mail.php'),
          resolve(__dirname, 'dist/api/test-mail.php')
        );
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mortgages: resolve(__dirname, 'mortgages.html'),
        protection: resolve(__dirname, 'protection.html'),
        about: resolve(__dirname, 'about.html'),
        fees: resolve(__dirname, 'fees.html'),
        contact: resolve(__dirname, 'contact.html'),
        terms: resolve(__dirname, 'terms.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        complaints: resolve(__dirname, 'complaints.html'),
      },
    },
  },
});
