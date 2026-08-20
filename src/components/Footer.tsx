export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-group">
          <span className="footer__brand">Mohammed Amaan Khan</span>
          <span className="footer__role">Building systems, mechanics, and experiences.</span>
        </div>
        <span className="footer__meta">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
