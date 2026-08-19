import { useEffect, useState } from "react";
import "./App.css";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

const PLACEHOLDER_SECTIONS = [
  {
    id: "work",
    label: "Work",
    note: "Selected game projects and prototypes — coming in a later milestone.",
  },
  {
    id: "skills",
    label: "Skills",
    note: "Tools, engines, and languages I work with — coming in a later milestone.",
  },
  {
    id: "about",
    label: "About",
    note: "A short intro to who I am as a game developer — coming in a later milestone.",
  },
  {
    id: "experience",
    label: "Experience",
    note: "Relevant experience and learning path — coming in a later milestone.",
  },
  {
    id: "contact",
    label: "Contact",
    note: "How to reach me — coming in a later milestone.",
  },
] as const;

function Navbar() {
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
        <a href="#top" className="nav__brand" onClick={() => setMenuOpen(false)}>
          Your Name
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
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
          <a
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <div className="hero__crosshair" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Game Developer</p>

          <h1 className="hero__title" id="hero-title">
            Building Games.
            <br />
            Learning How They Work.
          </h1>

          <p className="hero__supporting">
            I&apos;m a Game Development student focused on gameplay programming,
            systems, and technical game design — building projects with Unity,
            C#, and C++.
          </p>

          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn--secondary">
              Get In Touch
            </a>
          </div>

          <p className="hero__stack">Unity • C# • C++ • Game Design</p>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__panel">
            <div className="hero__panel-header">
              <span className="hero__panel-dot" />
              <span className="hero__panel-title">/dev/hero</span>
            </div>
            <div className="hero__panel-body">
              <div className="hero__line" />
              <div className="hero__line" />
              <div className="hero__line" />
              <div className="hero__line" />
              <div className="hero__line" />
            </div>
            <div className="hero__panel-footer">
              <span>STATUS</span>
              <span className="hero__panel-status">READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderSection({
  id,
  label,
  note,
}: {
  id: string;
  label: string;
  note: string;
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section__inner">
        <h2 className="section__title" id={`${id}-title`}>
          {label}
        </h2>
        <p className="section__note">{note}</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {PLACEHOLDER_SECTIONS.map((section) => (
          <PlaceholderSection
            key={section.id}
            id={section.id}
            label={section.label}
            note={section.note}
          />
        ))}
      </main>
      <footer className="footer">
        <div className="footer__inner">
          <span>Your Name — Game Developer</span>
          <span className="footer__meta">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}

export default App;