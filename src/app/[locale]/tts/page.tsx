import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { pageMetadata, localeFromParams } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "tts", "/tts");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("tts");
  const tNav = await getTranslations("nav");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/tts-building.jpg" />
      <Container className="py-16">
        <p className="max-w-3xl text-lg leading-8 text-muted">{t("model")}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["lead", "leadBody"],
            ["custom", "customBody"],
            ["uk", "ukBody"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl bg-white p-6">
              <h2 className="font-display text-xl text-deep">{t(title)}</h2>
              <p className="mt-2 text-sm text-muted">{t(body)}</p>
            </article>
          ))}
        </div>
      </Container>
      <section className="bg-white py-16">
        <Container>
          <ol className="space-y-3 text-sm text-muted">
            {["t2006", "t2008", "t2016", "t2019", "t2021a", "t2021b", "t2025"].map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl leading-7">{t("mission")}</p>
          <p className="mt-6 font-medium text-deep">{t("factory")}</p>
          <p className="mt-4 text-sm text-muted">{t("wipes")}</p>
          <Link href="/versawipes" className="mt-3 inline-block font-semibold text-teal-dark">
            {tNav("versawipes")}
          </Link>
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
