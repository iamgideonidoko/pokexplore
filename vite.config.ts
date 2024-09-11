import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 6996,
    strictPort: true,
    open: true,
  },
});
