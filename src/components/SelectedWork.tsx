import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

/**
 * Resolve the featured project from the data. If more than one project
 * is marked `featured`, only the first is treated as featured and the
 * rest are demoted to standard cards — with a dev-time warning so the
 * data can be fixed. This keeps the layout stable without breaking.
 */
function useFeaturedProjects() {
  const featuredIndex = projects.findIndex((p) => p.featured);
  const featuredCount = projects.filter((p) => p.featured).length;

  if (featuredCount > 1 && import.meta.env.DEV) {
    console.warn(
      `[SelectedWork] ${featuredCount} projects are marked featured. ` +
        `Only the first ("${projects[featuredIndex]?.title}") will be shown as featured.`,
    );
  }

  // If exactly one (or none) is featured, the data already drives the
  // layout via ProjectCard's `project.featured` flag — no remapping
  // needed. When multiple are featured, demote all but the first.
  if (featuredCount <= 1) return projects;

  return projects.map((p, i) =>
    i === featuredIndex ? p : { ...p, featured: false },
  );
}

export function SelectedWork() {
  const resolved = useFeaturedProjects();

  return (
    <section className="section section--work" id="work">
      <div className="section__inner">
        <SectionHeading
          id="work"
          index="01"
          title="Selected Work"
          subtitle="Games I'm building and the systems behind them — gameplay, mechanics, and the engineering that makes them run."
        />

        <div className="projects">
          {resolved.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={String(i + 1).padStart(2, "0")}
            />
          ))}
        </div>

        <p className="section__coming">
          Detailed case studies, screenshots, and play links will be added as
          each project is documented.
        </p>
      </div>
    </section>
  );
}
