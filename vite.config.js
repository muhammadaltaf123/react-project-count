import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react1project/', // اپنے repo کا نام یہاں لکھیں
})
