import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // Ensure this path is correct
  },
  server: {
    port: 3000, // Specify the development server port
    open: true, // Automatically open the browser
  },
  build: {
    outDir: 'dist', // Specify the output directory
    sourcemap: true, // Generate source maps for debugging
  },
});