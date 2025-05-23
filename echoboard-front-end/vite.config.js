import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://studious-space-enigma-w5rwvgrjx5pcgwrw-3000.app.github.dev',
        changeOrigin: true,
      }
    }
  }
})