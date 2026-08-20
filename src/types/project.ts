/**
 * Project status — kept honest. Only use a status when it is actually
 * known for a project. Omit it entirely when uncertain.
 */
export type ProjectStatus =
  | "Released"
  | "In Development"
  | "Prototype"
  | "Personal Project"
  | "Study Project";

/**
 * A single external link attached to a project (store page, repo, etc.).
 * `kind` is used for the link label / aria-label.
 */
export type ProjectLink = {
  kind: "store" | "github" | "itch.io" | "external";
  label: string;
  url: string;
};

/**
 * A short bullet used to surface a specific design or technical point
 * the project demonstrates. Optional — only add when the point is real.
 */
export type ProjectHighlight = {
  title: string;
  detail: string;
};

/**
 * Portfolio project. Every field except `id`, `title`, and
 * `shortDescription` is optional so projects can grow as real details
 * become available — nothing is forced or fabricated.
 */
export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;
  tagline?: string;
  category: string;
  categories?: string[];
  status?: ProjectStatus;
  role?: string;
  technologies: string[];
  /** Path under /public, e.g. "/images/projects/full-throttle/cover.png" */
  image?: string;
  /** Alt text for the real image. Required when `image` is set. */
  imageAlt?: string;
  links?: ProjectLink[];
  highlights?: ProjectHighlight[];
  /**
   * When true the card renders larger / featured. Only set this when a
   * project genuinely deserves emphasis — never to fake importance.
   */
  featured?: boolean;
};
