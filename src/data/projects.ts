import type {
  Project,
  ProjectGalleryImage,
  ProjectLink,
} from "../types/project";
import {
  asEnum,
  asString,
  asStringArray,
  basename,
  unwrap,
} from "./helpers";

/**
 * Portfolio projects are stored as one JSON file per project under
 * `src/content/projects/`. This module globs those files at build time and
 * normalizes them into the `Project` shape the UI already consumes.
 *
 * Image and gallery paths are public URLs (e.g. "/uploads/MonkeyJump/cover.png")
 * served from the `public/` folder, so they work identically in dev and
 * production and can be produced directly by the Decap CMS media library.
 */

const contentModules = import.meta.glob("../content/projects/*.json", {
  eager: true,
});

const PROJECT_STATUSES = [
  "Published",
  "Previously Published",
  "Completed",
  "In Progress",
  "Incomplete",
] as const;

const PROJECT_DETAIL_LEVELS = [
  "featured",
  "supporting",
  "fundamentals",
  "concept",
] as const;

const PROJECT_LINK_KINDS = ["store", "github", "itch.io", "external"] as const;

function buildProject(id: string, raw: Record<string, unknown>): Project {
  const image = asString(raw.image);

  const gallery = raw.gallery as
    | { src?: unknown; alt?: unknown }[]
    | undefined;

  const links = raw.links as
    | { kind?: unknown; label?: unknown; url?: unknown }[]
    | undefined;

  return {
    id,
    title: asString(raw.title) ?? id,
    shortDescription: asString(raw.shortDescription) ?? "",
    description: asString(raw.description),
    tagline: asString(raw.tagline),
    category: asString(raw.category) ?? "",
    categories: asStringArray(raw.categories),
    status: asEnum(raw.status, PROJECT_STATUSES),
    detailLevel: asEnum(raw.detailLevel, PROJECT_DETAIL_LEVELS),
    engine: asString(raw.engine),
    language: asString(raw.language),
    platform: asString(raw.platform),
    date: asString(raw.date),
    role: asString(raw.role),
    featured: raw.featured === true,
    order: typeof raw.order === "number" ? raw.order : undefined,
    image,
    imageAlt: asString(raw.imageAlt),
    gallery: gallery?.map(
      (g): ProjectGalleryImage => ({
        src: typeof g.src === "string" ? g.src : "",
        alt: typeof g.alt === "string" ? g.alt : "",
      }),
    ),
    contributions: asStringArray(raw.contributions),
    systems: asStringArray(raw.systems),
    designDecisions: asStringArray(raw.designDecisions),
    technicalChallenges: asStringArray(raw.technicalChallenges),
    whatILearned: asStringArray(raw.whatILearned),
    result: asString(raw.result),
    technologies: asStringArray(raw.technologies) ?? [],
    links: links
      ?.filter((l) => typeof l.url === "string")
      .map(
        (l): ProjectLink => ({
          kind: asEnum(l.kind, PROJECT_LINK_KINDS) ?? "external",
          label: typeof l.label === "string" ? l.label : "",
          url: l.url as string,
        }),
      ),
  };
}

const projectEntries = Object.entries(contentModules).map(([path, mod]) =>
  buildProject(basename(path), unwrap(mod)),
);

export const projects: Project[] = projectEntries;
