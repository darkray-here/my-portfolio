/**
 * A professional or academic experience entry. Dates are optional so we
 * never fabricate them. `current` marks ongoing roles.
 */
export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  /** Optional one-line context, e.g. "Internship". */
  context?: string;
  current?: boolean;
  startDate?: string;
  endDate?: string;
  /** Real responsibilities only — added when actually known. */
  points?: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  field: string;
  /** Specialization / focus line. */
  specialization?: string;
  institution?: string;
  /** e.g. "Third-year student". */
  status?: string;
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    id: "datamonk-unity-intern",
    role: "Unity Developer Intern",
    organization: "datamonk.dev",
    current: true,
  },
];

export const education: EducationEntry[] = [
  {
    id: "btech-game-development",
    degree: "B.Tech. (Game Development)",
    field: "Computer Engineering",
    specialization: "Specialization in Game Technology",
  },
];
