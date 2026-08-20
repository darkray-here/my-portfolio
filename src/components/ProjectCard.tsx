import type { Project } from "../types/project";
import { ProjectMedia } from "./ProjectMedia";

type ProjectCardProps = {
  project: Project;
  index: string;
};

/**
 * Data-driven project card. Renders a larger "featured" layout when
 * `project.featured` is set, otherwise a standard card. All content
 * comes from the project data — no hardcoded project info here.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryLink = project.links?.[0];
  const cardClass = `project ${project.featured ? "project--featured" : ""}`;

  const inner = (
    <>
      <ProjectMedia project={project} index={index} />

      <div className="project__body">
        <div className="project__head">
          <span className="project__index">{index}</span>
          <h3 className="project__title">{project.title}</h3>
        </div>

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
          {primaryLink ? (
            <span className="project__link">
              {primaryLink.label} →
            </span>
          ) : (
            <span className="project__link project__link--soon">
              Case study soon
            </span>
          )}
        </div>
      </div>
    </>
  );

  return primaryLink ? (
    <a
      className={cardClass}
      href={primaryLink.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — ${primaryLink.label}`}
    >
      {inner}
    </a>
  ) : (
    <article className={cardClass} aria-label={project.title}>
      {inner}
    </article>
  );
}
