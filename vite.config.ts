import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const port = Number(env.VITE_PORT || 5174)
  const proxy = {
    '/api': {
      target: env.VITE_API_PROXY_TARGET || 'http://localhost:3001',
      changeOrigin: true,
      headers: env.TELEMATICS_API_KEY ? { 'x-api-key': env.TELEMATICS_API_KEY } : undefined,
    },
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: { host: true, port, strictPort: true, proxy },
    preview: { host: true, port, strictPort: true, proxy },
  }
})
