/**
 * Project status — kept honest. Only use a status that is actually
 * known for a project. Omit it entirely when uncertain.
 */
export type ProjectStatus =
  | "Published"
  | "Completed"
  | "In Progress"
  | "Incomplete";

export type ProjectDetailLevel =
  | "featured"
  | "supporting"
  | "fundamentals"
  | "concept";

/**
 * A single external link attached to a project (store page, repository, or
 * other relevant destination).
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
 * Portfolio project. Every field except `id`, `title`,
 * `shortDescription`, `category`, and `technologies` is optional so
 * projects can grow as real details become available — nothing is
 * forced or fabricated.
 *
 * To add a project: copy an existing object, change the fields, and
 * add it to the array in src/data/projects.ts. That's it — the UI
 * picks it up automatically.
 */
export type Project = {
  /** Unique slug, also used as the React key. */
  id: string;
  title: string;
  /** One-line description shown on the card. */
  shortDescription: string;
  /** Longer description shown in the detail view. */
  description?: string;
  tagline?: string;
  category: string;
  categories?: string[];
  status?: ProjectStatus;
  /** Controls how much detail the project receives in the detail view. */
  detailLevel?: ProjectDetailLevel;
  /** e.g. "Unity". */
  engine?: string;
  /** e.g. "C#". */
  language?: string;
  /** e.g. "Mobile", "PC". */
  platform?: string;
  /** e.g. "June 2025". Optional — only when actually known. */
  date?: string;
  role?: string;
  /** What I personally did — bullet list for the detail view. */
  contributions?: string[];
  /** Gameplay systems / mechanics I built or worked on. */
  systems?: string[];
  /** Technical problems I encountered and how they were resolved. */
  technicalChallenges?: string[];
  /** Design choices worth calling out in a case study. */
  designDecisions?: string[];
  /** What the project taught me. */
  whatILearned?: string[];
  /** Honest outcome or current state, separate from the status badge. */
  result?: string;
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
   * If multiple projects are marked featured, only the first is used.
   */
  featured?: boolean;
  /**
   * Optional explicit ordering. When set, projects sort ascending by
   * this value; otherwise the array order is preserved.
   */
  order?: number;
};
