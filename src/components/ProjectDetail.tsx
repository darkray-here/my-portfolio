import { useEffect, useState } from "react";
import type { Project, ProjectGalleryImage } from "../types/project";

type ProjectDetailProps = {
  project: Project | null;
  onClose: () => void;
};

/**
 * Modal dialog showing the project breakdown. Escape, backdrop click, and
 * the labelled close button all dismiss it while body scroll is locked.
 */
export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  const meta = [
    project.engine && { label: "Engine", value: project.engine },
    project.language && { label: "Language", value: project.language },
    project.platform && { label: "Platform", value: project.platform },
    project.date && { label: "Date", value: project.date },
    project.role && { label: "Role", value: project.role },
    project.status && { label: "Status", value: project.status },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div
      className="detail"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-title"
      onClick={onClose}
    >
      <div
        className="detail__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="detail__close"
          aria-label="Close project details"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="detail__head">
          {project.status ? (
            <span className="detail__status">{project.status}</span>
          ) : null}
          <h2 className="detail__title" id="detail-title">
            {project.title}
          </h2>
          {project.tagline ? (
            <p className="detail__tagline">{project.tagline}</p>
          ) : null}
        </div>

        {project.gallery && project.gallery.length > 0 ? (
          <ProjectGallery gallery={project.gallery} />
        ) : null}

        {project.description ? (
          <p className="detail__desc">{project.description}</p>
        ) : null}

        {meta.length > 0 ? (
          <dl className="detail__meta">
            {meta.map((item) => (
              <div key={item.label} className="detail__meta-item">
                <dt className="detail__meta-label">{item.label}</dt>
                <dd className="detail__meta-value">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <DetailSection title="My contribution" items={project.contributions} />
        <DetailSection
          title="Design decisions"
          items={project.designDecisions}
        />
        {project.detailLevel !== "fundamentals" &&
        project.detailLevel !== "concept" ? (
          <DetailSection title="Systems & mechanics" items={project.systems} />
        ) : null}
        {project.detailLevel === "featured" ? (
          <DetailSection
            title="Technical challenge"
            items={project.technicalChallenges}
          />
        ) : null}
        {project.detailLevel !== "concept" ? (
          <DetailSection title="What I learned" items={project.whatILearned} />
        ) : null}

        {project.result ? (
          <div className="detail__section detail__section--result">
            <h3 className="detail__section-title">Result</h3>
            <p className="detail__result">{project.result}</p>
          </div>
        ) : null}

        {project.technologies.length > 0 ? (
          <div className="detail__section">
            <h3 className="detail__section-title">Technologies</h3>
            <div className="detail__tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {project.links && project.links.length > 0 ? (
          <div className="detail__links">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary detail__link"
              >
                {link.label} →
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function DetailSection({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;
  return (
    <div className="detail__section">
      <h3 className="detail__section-title">{title}</h3>
      <ul className="detail__list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectGallery({ gallery }: { gallery: ProjectGalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const count = gallery.length;

  const goPrev = () => setIndex((i) => (i - 1 + count) % count);
  const goNext = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="detail__gallery-section">
      <div className="detail__gallery">
        <button
          type="button"
          className="detail__gallery-nav detail__gallery-nav--prev"
          aria-label="Previous image"
          onClick={goPrev}
        >
          ‹
        </button>

        <div className="detail__gallery-stage">
          <img
            className="detail__gallery-image"
            src={gallery[index].src}
            alt={gallery[index].alt}
            decoding="async"
          />
          <span className="detail__gallery-counter">
            {index + 1} / {count}
          </span>
        </div>

        <button
          type="button"
          className="detail__gallery-nav detail__gallery-nav--next"
          aria-label="Next image"
          onClick={goNext}
        >
          ›
        </button>
      </div>
    </div>
  );
}
