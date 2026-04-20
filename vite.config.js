import { defineConfig } from 'vite';

export default defineConfig({
  // Base URL — set to '/' for GitHub Pages with a custom domain,
  // or '/your-repo-name/' if hosting at username.github.io/repo-name
  base: '/csw-study-app/',

  build: {
    outDir: 'dist',
    sourcemap: true,
  },

  server: {
    port: 5173,
    open: true,
  },
});
