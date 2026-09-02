import type {
  Project,
  ProjectGalleryImage,
  ProjectLink,
} from "../types/project";

/**
 * Portfolio projects are now stored as one JSON file per project under
 * `src/content/projects/`. This module globs those files at build time and
 * normalizes them into the `Project` shape the UI already consumes.
 *
 * Image and gallery paths inside the content files are relative to
 * `src/assets/` and are resolved here to bundled asset URLs so Vite still
 * hashes and copies them in production builds.
 */

const contentModules = import.meta.glob("../content/projects/*.json", {
  eager: true,
}) as Record<string, { default: Record<string, unknown> }>;

const assetModules = import.meta.glob(
  [
    "../assets/**/*.png",
    "../assets/**/*.jpg",
    "../assets/**/*.jpeg",
    "../assets/**/*.gif",
    "../assets/**/*.webp",
    "../assets/**/*.svg",
  ],
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

function resolveAsset(relativePath: string): string {
  return assetModules[`../assets/${relativePath}`] ?? "";
}

function basename(path: string): string {
  const parts = path.split("/");
  const file = parts[parts.length - 1] ?? path;
  const dot = file.lastIndexOf(".");
  return dot === -1 ? file : file.slice(0, dot);
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined;
}

function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.filter((v): v is string => typeof v === "string");
}

function buildProject(id: string, raw: Record<string, unknown>): Project {
  const rawImage = asString(raw.image);
  const image = rawImage ? resolveAsset(rawImage) || undefined : undefined;

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
    status: asString(raw.status) as Project["status"],
    detailLevel: asString(raw.detailLevel) as Project["detailLevel"],
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
        src: typeof g.src === "string" ? resolveAsset(g.src) : "",
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
          kind:
            typeof l.kind === "string"
              ? (l.kind as ProjectLink["kind"])
              : "external",
          label: typeof l.label === "string" ? l.label : "",
          url: l.url as string,
        }),
      ),
  };
}

const projectEntries = Object.entries(contentModules).map(([path, mod]) =>
  buildProject(basename(path), mod.default),
);

export const projects: Project[] = projectEntries;
