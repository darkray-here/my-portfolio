import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <SectionHeading
          id="about"
          index="02"
          title="About"
          subtitle="Design and implementation, working together."
        />

        <div className="about">
          <div className="about__intro">
            <p className="about__lead">
              I&apos;m Mohammed Amaan Khan, a B.Tech. Game Development student
              focused on gameplay programming and level design in Unity.
            </p>
            <p>
              I&apos;ve contributed to mobile releases and built coursework
              projects involving platforming, spawning, animation states, UI,
              terrain, and basic vehicle interaction.
            </p>
            <p>
              I&apos;m developing toward technical game design: making gameplay
              systems and spaces work together clearly through deliberate
              prototyping and technical practice.
            </p>
          </div>

          <aside className="about__facts" aria-label="Quick facts">
            <div className="fact">
              <span className="fact__label">Focus</span>
              <span className="fact__value">Gameplay, systems &amp; level design</span>
            </div>
            <div className="fact">
              <span className="fact__label">Engine</span>
              <span className="fact__value">Unity</span>
            </div>
            <div className="fact">
              <span className="fact__label">Languages</span>
              <span className="fact__value">C#, learning C++</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
