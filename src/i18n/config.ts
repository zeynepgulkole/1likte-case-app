export type Locale = (typeof locales)[number];

export const locales = ["en", "tr"] as const;
export const defaultLocale: Locale = "tr";
