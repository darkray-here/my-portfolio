import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

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

/**
 * Build-time SEO injection. Reads the CMS-managed `settings.json` and injects
 * the `seo.*` values into `index.html` via placeholders. This runs in both
 * dev and production build, so SEO stays CMS-managed without any runtime
 * `document.title`/meta mutation.
 */
function seoInjection(): Plugin {
  const settingsPath = fileURLToPath(
    new URL('./src/content/site/settings.json', import.meta.url),
  )

  const defaults = {
    title: 'Mohammed Amaan Khan — Game Developer',
    description:
      'Mohammed Amaan Khan is a game developer using Unity and C# to build gameplay, shape levels, and prototype gameplay systems.',
    author: 'Mohammed Amaan Khan',
  }

  function readSeo() {
    try {
      const parsed = JSON.parse(readFileSync(settingsPath, 'utf8'))
      const seo = parsed?.seo ?? {}
      return {
        title: seo.title || defaults.title,
        description: seo.description || defaults.description,
        author: seo.author || defaults.author,
      }
    } catch {
      return defaults
    }
  }

  return {
    name: 'seo-injection',
    transformIndexHtml(html) {
      const seo = readSeo()
      return html
        .replace('__SEO_TITLE__', seo.title)
        .replace('__SEO_DESCRIPTION__', seo.description)
        .replace('__SEO_AUTHOR__', seo.author)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adminCmsRewrite(), seoInjection()],
})
