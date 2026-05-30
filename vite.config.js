import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// `base` is injected by the GitHub Pages workflow (e.g. "/Respect/") so assets
// resolve correctly on a project Pages URL. Locally it defaults to "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
