/**
 * Skill proficiency level. Kept honest — "Learning" is a valid label,
 * not a weakness to hide. No fake percentage scores.
 */
export type SkillLevel = "Primary" | "Learning" | "Familiar";

export type Skill = {
  name: string;
  level?: SkillLevel;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

/**
 * Only technologies that are genuinely part of the known skill set.
 * Nothing is added just to look complete.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Game Development",
    skills: [
      { name: "Unity", level: "Primary" },
      { name: "C#", level: "Primary" },
      { name: "Gameplay Programming", level: "Primary" },
      { name: "Game Systems", level: "Primary" },
    ],
  },
  {
    title: "Game Design",
    skills: [
      { name: "Game Mechanics" },
      { name: "Systems Design" },
      { name: "Level Design", level: "Learning" },
      { name: "Prototyping", level: "Primary" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "C++", level: "Learning" },
      { name: "Java", level: "Familiar" },
      { name: "TypeScript", level: "Familiar" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "IntelliJ IDEA" },
    ],
  },
];
