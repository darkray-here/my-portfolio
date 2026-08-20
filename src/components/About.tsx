import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <SectionHeading
          id="about"
          index="02"
          title="About"
          subtitle="A short intro to who I am and what I'm working toward."
        />

        <div className="about">
          <div className="about__intro">
            <p className="about__lead">
              I&apos;m Mohammed Amaan Khan, a B.Tech Game Development student
              who likes building games and understanding how their systems
              work.
            </p>
            <p>
              I enjoy both sides of game development — programming the systems
              that make a game run, and designing the mechanics that make it
              feel right to play. Most of my work is in Unity and C#, and I&apos;m
              also learning C++ to go deeper into how games are built at a
              lower level.
            </p>
            <p>
              I&apos;m working toward becoming a Technical Game Designer — the
              space where design decisions and technical implementation meet.
              For now, I&apos;m building projects, studying how systems and
              mechanics come together, and learning by doing.
            </p>
          </div>

          <aside className="about__facts" aria-label="Quick facts">
            <div className="fact">
              <span className="fact__label">Focus</span>
              <span className="fact__value">Gameplay programming &amp; systems design</span>
            </div>
            <div className="fact">
              <span className="fact__label">Engine</span>
              <span className="fact__value">Unity</span>
            </div>
            <div className="fact">
              <span className="fact__label">Languages</span>
              <span className="fact__value">C#, C++, learning more</span>
            </div>
            <div className="fact">
              <span className="fact__label">Goal</span>
              <span className="fact__value">Technical Game Designer</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
