import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr", "de", "es"] as const;
export type AppLocale = (typeof locales)[number];

export const localeLabels: Record<AppLocale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});
