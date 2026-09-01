import type { Project } from "../types/project";
import { ProjectMedia } from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  index: string;
  onOpen: (project: Project) => void;
};

/**
 * Data-driven project card. Renders a larger "featured" layout when
 * `project.featured` is set, otherwise a standard card. All content
 * comes from the project data — no hardcoded project info here.
 *
 * Clicking the card opens the project detail modal via `onOpen`.
 */
export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const cardClass = `project ${project.featured ? "project--featured" : ""}`;

  return (
    <article
      className={cardClass}
      aria-label={project.title}
      tabIndex={0}
      role="button"
      onClick={() => onOpen(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(project);
        }
      }}
    >
      <ProjectMedia project={project} index={index} />

      <div className="project__body">
        <div className="project__head">
          <span className="project__index">{index}</span>
          <h3 className="project__title">{project.title}</h3>
        </div>

        {project.status ? (
          <p className="project__status-text">{project.status}</p>
        ) : null}

        {project.tagline ? (
          <p className="project__tagline">{project.tagline}</p>
        ) : null}

        <p className="project__desc">{project.shortDescription}</p>

        <div className="project__tags" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project__foot">
          <span className="project__category">{project.category}</span>
          <span className="project__link">View details →</span>
        </div>
      </div>
    </article>
  );
}
