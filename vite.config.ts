import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Serve the standalone Decap CMS admin page at /admin and /admin/.
// Without this, Vite's SPA fallback would return the React portfolio app
// (root index.html) at that URL instead of the CMS.
function adminCmsRewrite(): Plugin {
  const rewrite = (req: any, _res: any, next: any) => {
    const raw = (req.url ?? '') as string
    const qIndex = raw.indexOf('?')
    const pathname = qIndex === -1 ? raw : raw.slice(0, qIndex)
    if (pathname === '/admin' || pathname === '/admin/') {
      const search = qIndex === -1 ? '' : raw.slice(qIndex)
      req.url = `/admin/index.html${search}`
    }
    next()
  }
  return {
    name: 'admin-cms-rewrite',
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adminCmsRewrite()],
})
