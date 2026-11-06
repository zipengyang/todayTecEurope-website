import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, localeFromParams } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "privacy", "/privacy-policy");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("privacy");

  return (
    <>
      <PageHero title={t("headline")} />
      <Container className="max-w-3xl space-y-8 py-16">
        {[
          ["whoTitle", "whoBody"],
          ["collectTitle", "collectBody"],
          ["useTitle", "useBody"],
          ["shareTitle", "shareBody"],
          ["rightsTitle", "rightsBody"],
          ["retainTitle", "retainBody"],
        ].map(([title, body]) => (
          <section key={title}>
            <h2 className="font-display text-2xl text-deep">{t(title)}</h2>
            <p className="mt-3 leading-7 text-muted">{t(body)}</p>
          </section>
        ))}
      </Container>
      <OfficesGrid />
    </>
  );
}
