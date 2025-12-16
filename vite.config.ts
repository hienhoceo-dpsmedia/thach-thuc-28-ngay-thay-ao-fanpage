import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Quan trọng: Thiết lập đường dẫn tương đối để chạy trên shared hosting/cPanel
  build: {
    outDir: 'dist',
  }
})