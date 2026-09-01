import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

/**
 * Resolve the featured project from the data. If more than one project
 * is marked `featured`, only the first is treated as featured and the
 * rest are demoted to standard cards — with a dev-time warning so the
 * data can be fixed. This keeps the layout stable without breaking.
 *
 * Projects sort by `order` when set, otherwise preserve array order.
 */
function resolveProjects() {
  const featuredIndex = projects.findIndex((p) => p.featured);
  const featuredCount = projects.filter((p) => p.featured).length;

  if (featuredCount > 1 && import.meta.env.DEV) {
    console.warn(
      `[SelectedWork] ${featuredCount} projects are marked featured. ` +
        `Only the first ("${projects[featuredIndex]?.title}") will be shown as featured.`,
    );
  }

  // Sort by explicit order if any project sets it; otherwise keep array order.
  const hasOrder = projects.some((p) => p.order !== undefined);
  const sorted = hasOrder
    ? [...projects].sort(
        (a, b) => (a.order ?? 0) - (b.order ?? 0),
      )
    : projects;

  // If multiple are featured, demote all but the first.
  if (featuredCount <= 1) return sorted;
  return sorted.map((p, i) =>
    i === featuredIndex ? p : { ...p, featured: false },
  );
}

export function SelectedWork() {
  const [active, setActive] = useState<Project | null>(null);
  const resolved = resolveProjects();

  return (
    <section className="section section--work" id="work">
      <div className="section__inner">
        <SectionHeading
          id="work"
          index="01"
          title="Selected Work"
          subtitle="Mobile releases, coursework projects, and an unfinished concept showing my work across gameplay and level design."
        />

        <div className="projects">
          {resolved.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={String(i + 1).padStart(2, "0")}
              onOpen={setActive}
            />
          ))}
        </div>

      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
