import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-directory-index',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.endsWith('/') && req.url !== '/') {
            const indexFile = path.join(__dirname, 'public', req.url, 'index.html')
            if (fs.existsSync(indexFile)) {
              req.url = req.url + 'index.html'
            }
          }
          next()
        })
      }
    }
  ],
})
