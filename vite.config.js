import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    // Sin mapas de código en producción: pesaban 2.5 MB y no los necesita el visitante
    sourcemap: false
  }
})