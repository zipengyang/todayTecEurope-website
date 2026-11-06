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
  return pageMetadata(locale, "versawipes", "/versawipes");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("versawipes");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/versawipes.jpg" />
      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <img src="/photos/printhead-clean.jpg" alt="" className="rounded-3xl object-cover" />
        <div>
          <h2 className="font-display text-3xl text-deep">{t("problemTitle")}</h2>
          <p className="mt-4 leading-7 text-muted">{t("problemBody")}</p>
        </div>
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            ["benefit1Title", "benefit1Body"],
            ["benefit2Title", "benefit2Body"],
            ["benefit3Title", "benefit3Body"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl bg-paper p-6">
              <h2 className="font-display text-xl text-deep">{t(title)}</h2>
              <p className="mt-2 text-sm text-muted">{t(body)}</p>
            </article>
          ))}
        </Container>
      </section>
      <Container className="grid gap-6 py-16 md:grid-cols-3">
        <article className="rounded-3xl border border-line bg-white p-6">
          <h2 className="font-display text-xl text-deep">{t("sachetsTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("sachetsBody")}</p>
        </article>
        <article className="rounded-3xl border border-line bg-white p-6">
          <h2 className="font-display text-xl text-deep">{t("tubTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("tubBody")}</p>
        </article>
        <article className="rounded-3xl bg-teal-soft p-6">
          <h2 className="font-display text-xl text-deep">{t("brandTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("brandBody")}</p>
        </article>
      </Container>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
