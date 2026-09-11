import type { ContactContent, ContactLink } from "../types/content";
import { asString, singleton } from "./helpers";

const modules = import.meta.glob("../content/site/contact.json", {
  eager: true,
});

const raw = singleton(modules);

const links: ContactLink[] = (
  raw.links as { id?: unknown; label?: unknown; url?: unknown; value?: unknown }[]
)?.map((l) => ({
  id: asString(l.id) ?? "",
  label: asString(l.label) ?? "",
  url: asString(l.url) ?? "",
  value: asString(l.value) ?? "",
})) ?? [];

export const contactContent: ContactContent = {
  headline: asString(raw.headline) ?? "",
  mutedLine: asString(raw.mutedLine),
  links,
};
