import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
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
