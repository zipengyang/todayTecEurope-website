import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { pagePaths, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pagePaths.map((path) => {
    const languages: Record<string, string> = {};
    for (const locale of routing.locales) {
      languages[locale] = `${siteConfig.url}/${locale}${path === "/" ? "" : path}`;
    }
    languages["x-default"] = languages[routing.defaultLocale];

    return {
      url: languages[routing.defaultLocale],
      lastModified,
      alternates: { languages },
    };
  });
}
