import { SectionHeading } from "./SectionHeading";
import { aboutContent } from "../data/about";
import { siteSettings } from "../data/site";

export function About() {
  const { lead, paragraphs, facts } = aboutContent;
  const { profileImage, resume } = siteSettings;

  return (
    <section className="section" id="about">
      <div className="section__inner">
        <SectionHeading
          id="about"
          index="02"
          title={siteSettings.sections.about.title}
          subtitle={siteSettings.sections.about.subtitle}
        />

        <div className="about">
          <div className="about__intro">
            {profileImage ? (
              <img
                className="about__portrait"
                src={profileImage}
                alt={siteSettings.brand}
                loading="lazy"
                decoding="async"
              />
            ) : null}

            <p className="about__lead">{lead}</p>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {resume ? (
              <a
                className="btn btn--primary about__resume"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download resume
              </a>
            ) : null}
          </div>

          <aside className="about__facts" aria-label="Quick facts">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <span className="fact__label">{fact.label}</span>
                <span className="fact__value">{fact.value}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
