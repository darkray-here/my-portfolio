import { siteSettings } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-group">
          <span className="footer__brand">{siteSettings.brand}</span>
          {siteSettings.footerRole ? (
            <span className="footer__role">{siteSettings.footerRole}</span>
          ) : null}
        </div>
        <span className="footer__meta">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
