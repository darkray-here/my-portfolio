/**
 * Smoothly scroll to a section by id without leaving a persistent hash
 * in the URL. Falls back to the browser default when smooth scrolling
 * is not supported or when the user prefers reduced motion.
 */
export function scrollToId(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  try {
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  } catch {
    // Older browsers — jump instead.
    const top = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top);
  }
}

/**
 * Prevent the browser from restoring a stale section hash (e.g.
 * `#contact`) on a fresh load of the root URL, which would otherwise
 * jump straight to that section. Runs as early as possible — before
 * React mounts — so the page never visibly jumps.
 *
 * A fresh visit to the root always starts at the top. In-page
 * navigation still works because `ScrollLink` uses `scrollToId` and
 * clears the hash immediately after scrolling, so no persistent hash
 * is left behind to be restored on reload.
 */
export function initScrollRestoration(): void {
  // Tell the browser not to auto-restore scroll position.
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // Always strip any hash on a fresh load so the root starts at the
  // top. Direct deep-links are intentionally not supported via the URL
  // hash — navigation is handled in-page by ScrollLink.
  if (window.location.hash) {
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }

  // Ensure we begin at the very top.
  window.scrollTo(0, 0);
}
