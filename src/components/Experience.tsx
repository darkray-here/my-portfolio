import { SectionHeading } from "./SectionHeading";
import { experience, education } from "../data/experience";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__inner">
        <SectionHeading
          id="experience"
          index="03"
          title="Experience & Education"
          subtitle="Where I'm learning and working on games."
        />

        <div className="timeline">
          <div className="timeline__col">
            <h3 className="timeline__heading">Experience</h3>
            <ul className="entries">
              {experience.map((entry) => (
                <li key={entry.id} className="entry">
                  <div className="entry__head">
                    <span className="entry__role">{entry.role}</span>
                    {entry.current ? (
                      <span className="entry__badge">Current</span>
                    ) : null}
                  </div>
                  <span className="entry__org">{entry.organization}</span>
                  {entry.context ? (
                    <span className="entry__context">{entry.context}</span>
                  ) : null}
                  {entry.points && entry.points.length > 0 ? (
                    <ul className="entry__points">
                      {entry.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="entry__pending">
                      Details to be added.
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="timeline__col">
            <h3 className="timeline__heading">Education</h3>
            <ul className="entries">
              {education.map((entry) => (
                <li key={entry.id} className="entry">
                  <div className="entry__head">
                    <span className="entry__role">{entry.degree}</span>
                    {entry.current ? (
                      <span className="entry__badge">Current</span>
                    ) : null}
                  </div>
                  <span className="entry__org">{entry.field}</span>
                  {entry.specialization ? (
                    <span className="entry__context">{entry.specialization}</span>
                  ) : null}
                  {entry.status ? (
                    <span className="entry__context">{entry.status}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
