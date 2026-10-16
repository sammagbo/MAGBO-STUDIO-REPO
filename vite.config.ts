/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // The CSP in vercel.json has no data: in font-src, so a font file is never inlined as a data: URL.
    assetsInlineLimit: (filePath) => (/\.(woff2?|ttf|otf|eot)$/i.test(filePath) ? false : undefined),
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap', '@gsap/react'],
          lenis: ['lenis'],
        },
      },
    },
  },
  test: {
    // scripts/commit-trace has its own node:test suite (npm run test:data)
    include: ['src/**/*.test.{ts,tsx}'],
  },
})
