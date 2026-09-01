import type { Project } from "../types/project";

type ProjectMediaProps = {
  project: Project;
  /** Shown over the media area, e.g. "01". */
  index: string;
};

/**
 * Project media area. Renders a real image when `project.image` is set,
 * otherwise an on-brand placeholder that clearly reads as a portfolio
 * placeholder (not fake game artwork).
 */
export function ProjectMedia({ project, index }: ProjectMediaProps) {
  const hasImage = Boolean(project.image);

  return (
    <div className="project__media">
      {hasImage ? (
        <img
          className="project__image"
          src={project.image}
          alt={project.imageAlt ?? `${project.title} cover`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="project__placeholder" aria-hidden="true">
          <div className="project__placeholder-grid" />
          <span className="project__placeholder-mark">{index}</span>
          <span className="project__placeholder-label">
            {project.title}
          </span>
          <span className="project__placeholder-note">No media available</span>
        </div>
      )}

      {project.status ? (
        <span className="project__status">{project.status}</span>
      ) : null}
    </div>
  );
}
