import type { SkillGroup } from "../types/content";
import { asString, folderEntries } from "./helpers";

const modules = import.meta.glob("../content/skills/*.json", {
  eager: true,
});

function toSkillGroup(
  raw: Record<string, unknown>,
): SkillGroup {
  const skills = (raw.skills as { name?: unknown; level?: unknown }[] | undefined)
    ?.filter((s) => typeof s.name === "string")
    .map((s) => ({
      name: s.name as string,
      level: typeof s.level === "string"
        ? (s.level as SkillGroup["skills"][number]["level"])
        : undefined,
    }));

  return {
    title: asString(raw.title) ?? "",
    skills: skills ?? [],
    order: typeof raw.order === "number" ? raw.order : undefined,
  };
}

export const skillGroups: SkillGroup[] = folderEntries(modules)
  .map(({ raw }) => toSkillGroup(raw))
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
