import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  // three.js is only reached through the dynamic import in HeroBackground, so it
  // is code-split into its own chunk automatically — no manualChunks needed.
  assetsInclude: ['**/*.pdf'],
});
