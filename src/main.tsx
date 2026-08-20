import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { initScrollRestoration } from './utils/scroll'
import App from './App.tsx'

// Run before React mounts so a stale section hash never causes the page
// to open mid-scroll on a fresh load of the root URL.
initScrollRestoration()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
