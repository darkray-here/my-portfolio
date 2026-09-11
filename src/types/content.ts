/**
 * Content types for the CMS-managed content layer.
 *
 * These mirror the shapes stored under `src/content/` and are consumed by the
 * React presentation layer. Keeping them centralized here (rather than inline
 * in each data module) keeps the CMS schema and the app types in one place.
 */

export type SkillLevel = "Primary" | "Learning" | "Familiar";

export type Skill = {
  name: string;
  level?: SkillLevel;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
  /** Optional explicit ordering. Lower sorts first. */
  order?: number;
};

export type ExperienceEntry = {
  id: string;
  role: string;
  organization: string;
  context?: string;
  current?: boolean;
  startDate?: string;
  endDate?: string;
  points?: string[];
  order?: number;
};

export type EducationEntry = {
  id: string;
  degree: string;
  field: string;
  specialization?: string;
  institution?: string;
  status?: string;
  current?: boolean;
  order?: number;
};

export type AboutFact = {
  label: string;
  value: string;
};

export type AboutContent = {
  lead: string;
  paragraphs: string[];
  facts: AboutFact[];
};

export type ContactLink = {
  id: string;
  label: string;
  url: string;
  value: string;
};

export type ContactContent = {
  headline: string;
  mutedLine?: string;
  links: ContactLink[];
};

export type SectionHeadingContent = {
  title: string;
  subtitle?: string;
};

export type HeroContent = {
  headline: string;
  supporting: string;
  focus: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type SeoContent = {
  title?: string;
  description?: string;
  author?: string;
};

export type SiteSections = {
  work: SectionHeadingContent;
  about: SectionHeadingContent;
  experience: SectionHeadingContent;
  skills: SectionHeadingContent;
  contact: SectionHeadingContent;
};

export type SiteSettings = {
  brand: string;
  role: string;
  footerRole?: string;
  hero: HeroContent;
  sections: SiteSections;
  seo: SeoContent;
  profileImage?: string;
  resume?: string;
};
