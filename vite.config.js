// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // Root of the project (where index.html is located)
  build: {
    outDir: 'dist', // Build output folder (Netlify uses this)
    emptyOutDir: true, // Clean before building
  },
  server: {
    port: 3000, // Local dev server port
    open: true, // Automatically open in browser
  }
})
