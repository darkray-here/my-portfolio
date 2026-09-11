import type {
  HeroContent,
  SeoContent,
  SiteSections,
  SiteSettings,
} from "../types/content";
import { asString, asStringArray, singleton } from "./helpers";

const modules = import.meta.glob("../content/site/settings.json", {
  eager: true,
});

const raw = singleton(modules);

function hero(raw: Record<string, unknown>): HeroContent {
  return {
    headline: asString(raw.headline) ?? "",
    supporting: asString(raw.supporting) ?? "",
    focus: asStringArray(raw.focus) ?? [],
    primaryCtaLabel: asString(raw.primaryCtaLabel) ?? "",
    secondaryCtaLabel: asString(raw.secondaryCtaLabel) ?? "",
  };
}

function section(raw: Record<string, unknown>): SiteSections[keyof SiteSections] {
  return {
    title: asString(raw.title) ?? "",
    subtitle: asString(raw.subtitle),
  };
}

const sectionsRaw = (raw.sections ?? {}) as Record<string, Record<string, unknown>>;

const sections: SiteSections = {
  work: section(sectionsRaw.work ?? {}),
  about: section(sectionsRaw.about ?? {}),
  experience: section(sectionsRaw.experience ?? {}),
  skills: section(sectionsRaw.skills ?? {}),
  contact: section(sectionsRaw.contact ?? {}),
};

const seoRaw = (raw.seo ?? {}) as Record<string, unknown>;
const seo: SeoContent = {
  title: asString(seoRaw.title),
  description: asString(seoRaw.description),
  author: asString(seoRaw.author),
};

export const siteSettings: SiteSettings = {
  brand: asString(raw.brand) ?? "",
  role: asString(raw.role) ?? "",
  footerRole: asString(raw.footerRole),
  hero: hero((raw.hero ?? {}) as Record<string, unknown>),
  sections,
  seo,
  profileImage: asString(raw.profileImage),
  resume: asString(raw.resume),
};
