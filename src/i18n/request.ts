import { hasLocale, type AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import de from "../../messages/de.json";
import en from "../../messages/en.json";
import es from "../../messages/es.json";
import fr from "../../messages/fr.json";
import { mergeMessages } from "./merge-messages";
import { routing, type AppLocale } from "./routing";

const messagesByLocale: Record<AppLocale, AbstractIntlMessages> = {
  en,
  fr,
  de,
  es,
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const localeMessages = messagesByLocale[locale];

  return {
    locale,
    messages:
      locale === routing.defaultLocale
        ? localeMessages
        : mergeMessages(en, localeMessages),
  };
});
