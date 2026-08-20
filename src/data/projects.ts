import type { Project } from "../types/project";

/**
 * Portfolio projects. Only facts that are actually known are included.
 * Unknown fields are omitted on purpose so nothing is fabricated —
 * they can be filled in later as real details, screenshots, and links
 * become available.
 *
 * Image paths point at /public and are left unset until a real image
 * exists. The card renders an elegant placeholder when no image is set.
 */
export const projects: Project[] = [
  {
    id: "full-throttle",
    title: "Full Throttle",
    shortDescription:
      "A motorbike endless-runner in the vein of Subway Surfers — dodge, react, and keep moving.",
    category: "Game Development",
    categories: ["Game Development", "Gameplay", "Endless Runner"],
    tagline: "Motorbike endless-runner",
    technologies: ["Unity", "C#"],
    featured: true,
  },
  {
    id: "skans-fortuna",
    title: "Skans Fortuna",
    shortDescription:
      "A roguelite tower-defense game where luck favors the fortified.",
    tagline: "Luck Favors the Fortified",
    category: "Game Design",
    categories: ["Game Design", "Systems Design", "Roguelite", "Tower Defense"],
    technologies: ["Unity", "C#"],
  },
  {
    id: "monkey-jump",
    title: "Monkey Jump",
    shortDescription: "A game project built around a simple, responsive jump mechanic.",
    category: "Game Development",
    categories: ["Game Development", "Gameplay"],
    technologies: ["Unity", "C#"],
  },
  {
    id: "careful-courier",
    title: "Careful Courier",
    shortDescription: "Game project currently being developed and documented.",
    category: "Game Development",
    categories: ["Game Development"],
    technologies: ["Unity", "C#"],
    status: "In Development",
  },
];
