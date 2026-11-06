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
  return pageMetadata(locale, "regma", "/regmatt");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("regma");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/regma-site.png" />
      <Container className="space-y-6 py-16 text-lg leading-8 text-muted">
        <p>{t("cover")}</p>
        <p>{t("group")}</p>
      </Container>
      <section className="bg-white py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{t("strengths")}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((key) => (
              <li key={key} className="rounded-2xl bg-paper px-4 py-3 text-sm">
                {t(key)}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-muted">{t("goal")}</p>
        </Container>
      </section>
      <Container className="py-16">
        <ol className="space-y-6">
          {[
            ["1986", "t1986"],
            ["2002", "t2002"],
            ["2012", "t2012"],
            ["2017", "t2017"],
            ["2025", "t2025"],
          ].map(([year, key]) => (
            <li key={year} className="grid gap-1 md:grid-cols-[80px_1fr]">
              <span className="font-semibold text-teal-dark">{year}</span>
              <span className="text-sm text-muted">{t(key)}</span>
            </li>
          ))}
        </ol>
        <h2 className="mt-12 font-display text-3xl text-deep">{t("heritage")}</h2>
        <p className="mt-3 text-muted">{t("samples")}</p>
      </Container>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
