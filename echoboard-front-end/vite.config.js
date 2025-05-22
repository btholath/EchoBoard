import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // host: true ensures the server is accessible from Codespaces' browser preview or forwarded port.
  server: {
    host: true, // or '0.0.0.0'
    port: 5173
  }
})
