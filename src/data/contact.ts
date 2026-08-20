/**
 * Contact destinations. URLs are left as empty strings until the real
 * values are provided — the UI hides a destination when its URL is
 * empty so nothing fake is ever shown.
 */
export type ContactLink = {
  id: string;
  label: string;
  /** Use "mailto:" for email, full URL for everything else. */
  url: string;
  /** Shown value, e.g. the handle or email address. */
  value: string;
};

/**
 * Editable contact data. Replace the empty `url` and `value` fields
 * with the real destinations when available.
 */
export const contactLinks: ContactLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "",
    value: "",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "",
    value: "",
  },
  {
    id: "itch",
    label: "itch.io",
    url: "",
    value: "",
  },
  {
    id: "email",
    label: "Email",
    url: "",
    value: "",
  },
];
