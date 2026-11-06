import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing, type AppLocale } from "@/i18n/routing";
import { siteConfig } from "./site";

const ogImage = "/brand/logo-colour.jpg";

export async function pageMetadata(
  locale: string,
  namespace: string,
  path: string,
): Promise<Metadata> {
  const loc = localeFromParams(locale);
  const t = await getTranslations({ locale: loc, namespace });
  const title = t("title");
  const description = t("description");
  const canonical = `${siteConfig.url}/${loc}${path === "/" ? "" : path}`;

  const languages: Record<string, string> = {};
  for (const code of routing.locales) {
    languages[code] = `${siteConfig.url}/${code}${path === "/" ? "" : path}`;
  }
  languages["x-default"] = `${siteConfig.url}/${routing.defaultLocale}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale: loc,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 360, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function localeFromParams(locale: string): AppLocale {
  return routing.locales.includes(locale as AppLocale)
    ? (locale as AppLocale)
    : routing.defaultLocale;
}
