import type { AboutContent } from "../types/content";
import { asString, asStringArray, singleton } from "./helpers";

const modules = import.meta.glob("../content/site/about.json", {
  eager: true,
});

const raw = singleton(modules);

const facts = (
  raw.facts as { label?: unknown; value?: unknown }[]
)?.map((f) => ({
  label: asString(f.label) ?? "",
  value: asString(f.value) ?? "",
})) ?? [];

export const aboutContent: AboutContent = {
  lead: asString(raw.lead) ?? "",
  paragraphs: asStringArray(raw.paragraphs) ?? [],
  facts,
};
