/**
 * Skill familiarity level. These labels describe the evidence represented in
 * this portfolio, not a formal proficiency score.
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
      { name: "UI Implementation", level: "Familiar" },
    ],
  },
  {
    title: "Game Design",
    skills: [
      { name: "Level Design", level: "Primary" },
      { name: "Mechanic Design", level: "Familiar" },
      { name: "Environmental Design", level: "Familiar" },
    ],
  },
  {
    title: "Gameplay / Systems",
    skills: [
      { name: "Spawning Systems", level: "Familiar" },
      { name: "Animation State Systems", level: "Familiar" },
      { name: "Collision / Physics", level: "Familiar" },
      { name: "Gameplay Logic", level: "Familiar" },
    ],
  },
  {
    title: "Tools / Technology",
    skills: [
      { name: "Unity Terrain Tools", level: "Familiar" },
      { name: "Cinemachine", level: "Familiar" },
      { name: "Mixamo", level: "Familiar" },
      { name: "Aseprite", level: "Learning" },
      { name: "Git & GitHub", level: "Familiar" },
      { name: "C++", level: "Learning" },
    ],
  },
];
