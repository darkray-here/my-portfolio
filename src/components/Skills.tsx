import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "../data/skills";
import { siteSettings } from "../data/site";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__inner">
        <SectionHeading
          id="skills"
          index="04"
          title={siteSettings.sections.skills.title}
          subtitle={siteSettings.sections.skills.subtitle}
        />

        <div className="skills">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="skill-group__title">{group.title}</h3>
              <ul className="skill-group__list">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="skill">
                    <span className="skill__name">{skill.name}</span>
                    {skill.level ? (
                      <span className={`skill__level skill__level--${skill.level.toLowerCase()}`}>
                        {skill.level}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
