import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the production build
    assetsDir: 'assets', // Directory for static assets
    sourcemap: true, // Generate source maps
    rollupOptions: {
      input: 'index.html', // Entry point for the application
    },
  },
  server: {
    port: 3000, // Port number for the development server
    open: true, // Open the browser automatically
  },
  define: {
    'process.env': {
      VITE_API_BASE_URL: '"http://localhost:4000"',
      // Define other environment variables here
    },
  },
});
