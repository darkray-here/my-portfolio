import { SectionHeading } from "./SectionHeading";
import { contactContent } from "../data/contact";
import { siteSettings } from "../data/site";

export function Contact() {
  // Only show destinations that actually have a URL set.
  const available = contactContent.links.filter((link) => link.url.length > 0);

  return (
    <section className="section section--contact" id="contact">
      <div className="section__inner">
        <SectionHeading
          id="contact"
          index="05"
          title={siteSettings.sections.contact.title}
          subtitle={siteSettings.sections.contact.subtitle}
        />

        <div className="contact">
          <div className="contact__lead">
            <p className="contact__line">{contactContent.headline}</p>
            {available.length > 0 && contactContent.mutedLine ? (
              <p className="contact__line contact__line--muted">
                {contactContent.mutedLine}
              </p>
            ) : null}
          </div>

          {available.length > 0 ? (
            <ul className="contact__links">
              {available.map((link) => (
                <li key={link.id}>
                  <a
                    className="contact__link"
                    href={link.url}
                    {...(link.url.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
