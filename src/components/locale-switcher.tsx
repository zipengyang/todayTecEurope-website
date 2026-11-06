"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeLabels, routing, type AppLocale } from "@/i18n/routing";

export function LocaleSwitcher({ invert = false }: { invert?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  return (
    <label className="inline-flex items-center gap-2 text-xs font-medium">
      <span className="sr-only">{t("language")}</span>
      <select
        value={locale}
        onChange={(event) => {
          router.replace(pathname, {
            locale: event.target.value as AppLocale,
          });
        }}
        className={`rounded-full border px-3 py-1.5 text-xs ${
          invert
            ? "border-white/20 bg-white/10 text-white"
            : "border-line bg-white text-deep"
        }`}
      >
        {routing.locales.map((code) => (
          <option key={code} value={code} className="text-deep">
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
