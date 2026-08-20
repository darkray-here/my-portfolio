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
 * Skills are grounded in the actual project work — only technologies
 * and disciplines with evidence from the portfolio are listed.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Game Development",
    skills: [
      { name: "Unity", level: "Primary" },
      { name: "C#", level: "Primary" },
      { name: "Gameplay Programming", level: "Primary" },
      { name: "UI Implementation", level: "Primary" },
    ],
  },
  {
    title: "Game Design",
    skills: [
      { name: "Level Design", level: "Primary" },
      { name: "Mechanic Design", level: "Primary" },
      { name: "Environmental Design", level: "Primary" },
      { name: "Gameplay Iteration", level: "Primary" },
    ],
  },
  {
    title: "Gameplay / Systems",
    skills: [
      { name: "Spawning Systems", level: "Primary" },
      { name: "Animation State Systems", level: "Primary" },
      { name: "Collision / Physics", level: "Primary" },
      { name: "Gameplay Logic", level: "Primary" },
    ],
  },
  {
    title: "Tools / Technology",
    skills: [
      { name: "Unity Terrain Tools", level: "Primary" },
      { name: "Cinemachine", level: "Familiar" },
      { name: "Mixamo", level: "Familiar" },
      { name: "Aseprite", level: "Learning" },
      { name: "Git & GitHub", level: "Familiar" },
      { name: "C++", level: "Learning" },
    ],
  },
];
