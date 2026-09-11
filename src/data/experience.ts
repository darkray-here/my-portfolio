import type { EducationEntry, ExperienceEntry } from "../types/content";
import { asString, asStringArray, folderEntries } from "./helpers";

const experienceModules = import.meta.glob("../content/experience/*.json", {
  eager: true,
});
const educationModules = import.meta.glob("../content/education/*.json", {
  eager: true,
});

export const experience: ExperienceEntry[] = folderEntries(experienceModules)
  .map(({ id, raw }) => ({
    id,
    role: asString(raw.role) ?? "",
    organization: asString(raw.organization) ?? "",
    context: asString(raw.context),
    current: raw.current === true,
    startDate: asString(raw.startDate),
    endDate: asString(raw.endDate),
    points: asStringArray(raw.points),
    order: typeof raw.order === "number" ? raw.order : undefined,
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const education: EducationEntry[] = folderEntries(educationModules)
  .map(({ id, raw }) => ({
    id,
    degree: asString(raw.degree) ?? "",
    field: asString(raw.field) ?? "",
    specialization: asString(raw.specialization),
    institution: asString(raw.institution),
    status: asString(raw.status),
    current: raw.current === true,
    order: typeof raw.order === "number" ? raw.order : undefined,
  }))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
