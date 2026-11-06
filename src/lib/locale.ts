import { setRequestLocale } from "next-intl/server";
import { localeFromParams } from "./metadata";

export function useLocaleParam(locale: string) {
  const loc = localeFromParams(locale);
  setRequestLocale(loc);
  return loc;
}
