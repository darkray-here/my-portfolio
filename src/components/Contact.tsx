import { SectionHeading } from "./SectionHeading";
import { contactLinks } from "../data/contact";

export function Contact() {
  // Only show destinations that actually have a URL set.
  const available = contactLinks.filter((link) => link.url.length > 0);

  return (
    <section className="section section--contact" id="contact">
      <div className="section__inner">
        <SectionHeading
          id="contact"
          index="05"
          title="Contact"
          subtitle="The best way to reach me about projects, opportunities, or collaboration."
        />

        <div className="contact">
          <div className="contact__lead">
            <p className="contact__line">
              I&apos;m open to game development internships, gameplay
              programming roles, and collaboration on game projects.
            </p>
            <p className="contact__line contact__line--muted">
              {available.length > 0
                ? "Reach me through any of the links below."
                : "Contact links will be added soon."}
            </p>
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
          ) : (
            <div className="contact__pending" aria-hidden="true">
              <span className="contact__pending-label">GitHub</span>
              <span className="contact__pending-label">LinkedIn</span>
              <span className="contact__pending-label">itch.io</span>
              <span className="contact__pending-label">Email</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
