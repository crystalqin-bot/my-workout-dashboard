import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-workout-dashboard/',
  server: {
    proxy: {
      '/api': {
        target: 'https://api.onepeloton.com',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
