import { localeFromParams } from "@/lib/metadata";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/cookie-banner";
import { DocumentLocale } from "@/components/document-locale";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { routing } from "@/i18n/routing";
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const loc = localeFromParams(locale);
  const t = await getTranslations({ locale: loc, namespace: "meta" });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.shortName}`,
    },
    description: t("description"),
    icons: { icon: "/favicon.svg" },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: loc,
      images: ["/brand/logo-colour.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/brand/logo-colour.jpg"],
    },
    keywords: [
      "thermal transfer ribbon",
      "TTR",
      "wax ribbon",
      "wax resin ribbon",
      "resin ribbon",
      "Todaytec",
      "TTS",
      "Calor",
      "REGMA",
    ],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(localeFromParams(locale));
  const messages = await getMessages();
  const tCommon = await getTranslations("common");

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-paper font-sans text-ink">
        <NextIntlClientProvider messages={messages}>
          <DocumentLocale locale={locale} />
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={websiteJsonLd()} />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-deep"
          >
            {tCommon("skipToContent")}
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
