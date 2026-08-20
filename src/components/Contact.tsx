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
          subtitle="For game development opportunities and project conversations."
        />

        <div className="contact">
          <div className="contact__lead">
            <p className="contact__line">
              I&apos;m open to game development internships, gameplay
              programming roles, and collaboration on game projects.
            </p>
            {available.length > 0 ? (
              <p className="contact__line contact__line--muted">
                Reach me through any of the links below.
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
