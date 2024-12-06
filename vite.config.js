import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for Vite's build
    rollupOptions: {
      input: './pages/index.js',  // Make sure this points to your entry file
    },
  },
});
