import { useEffect, useState } from "react";
import { ScrollLink } from "./ScrollLink";

const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <ScrollLink
          targetId="top"
          className="nav__brand"
          onNavigate={() => setMenuOpen(false)}
        >
          Mohammed Amaan Khan
        </ScrollLink>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <ScrollLink key={link.id} targetId={link.id} className="nav__link">
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        <button
          type="button"
          className={`nav__toggle ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`nav__mobile ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <ScrollLink
            key={link.id}
            targetId={link.id}
            className="nav__mobile-link"
            onNavigate={() => setMenuOpen(false)}
          >
            {link.label}
          </ScrollLink>
        ))}
      </nav>
    </header>
  );
}
