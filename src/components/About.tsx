import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner">
        <SectionHeading
          id="about"
          index="02"
          title="About"
          subtitle="The kind of work I want to keep getting better at."
        />

        <div className="about">
          <div className="about__intro">
            <p className="about__lead">
              I&apos;m Mohammed Amaan Khan, a B.Tech Game Development student
              who builds games and thinks about the systems behind them.
            </p>
            <p>
              My work spans both sides of game development: implementing the
              systems that make a game run and shaping the levels and mechanics
              that make it readable and enjoyable to play. I have shipped
              mobile projects and built smaller Unity projects to practice
              spawning, animation states, UI, and gameplay logic.
            </p>
            <p>
              I&apos;m working toward the design-and-programming intersection:
              gameplay systems, mechanics, and the level decisions around them.
              That is the direction I want to grow into through more deliberate
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
            <div className="fact">
              <span className="fact__label">Direction</span>
              <span className="fact__value">Technical game design</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
