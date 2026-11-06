import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, localeFromParams } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "news", "/news");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("news");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} image="/photos/tts-building.jpg" />
      <article className="bg-white py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl text-deep">{t("articleTitle")}</h2>
          <div className="mt-6 space-y-4 text-base leading-8 text-muted">
            <p>{t("articleBody1")}</p>
            <p>{t("articleBody2")}</p>
            <p>{t("articleBody3")}</p>
            <p>{t("articleBody4")}</p>
            <p>{t("articleBody5")}</p>
          </div>
        </Container>
      </article>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
