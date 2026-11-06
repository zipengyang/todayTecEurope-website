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
  return pageMetadata(locale, "global", "/todaytec-global");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("global");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("trusted")} image="/photos/solar.jpg" />
      <Container className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {[t("share"), t("production"), t("customers"), t("employees")].map((item) => (
          <p key={item} className="rounded-3xl bg-white p-5 font-display text-xl text-deep">
            {item}
          </p>
        ))}
      </Container>
      <Container className="pb-16">
        <p className="max-w-3xl text-lg leading-8 text-muted">{t("intro")}</p>
        <h2 className="mt-10 font-display text-3xl text-deep">{t("apartTitle")}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {["apart1", "apart2", "apart3", "apart4"].map((key) => (
            <li key={key} className="rounded-2xl border border-line px-4 py-3 text-sm">
              {t(key)}
            </li>
          ))}
        </ul>
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-8 md:grid-cols-3">
          {[
            ["qcTitle", "qcBody"],
            ["ecoTitle", "ecoBody"],
            ["batchTitle", "batchBody"],
          ].map(([title, body]) => (
            <article key={title}>
              <h2 className="font-display text-xl text-deep">{t(title)}</h2>
              <p className="mt-2 text-sm text-muted">{t(body)}</p>
            </article>
          ))}
        </Container>
      </section>
      <Container className="py-16">
        <h2 className="font-display text-3xl text-deep">{t("envTitle")}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[t("fsc"), t("waste"), t("solar")].map((item) => (
            <p key={item} className="rounded-3xl bg-teal-soft p-5 text-sm text-muted">
              {item}
            </p>
          ))}
        </div>
      </Container>
      <section className="bg-white py-16">
        <Container>
          <ol className="space-y-4 text-sm">
            {[
              ["2002", "t2002"],
              ["2009", "t2009"],
              ["2015", "t2015"],
              ["2019", "t2019"],
              ["2021", "t2021"],
              ["2023", "t2023"],
              ["2024", "t2024"],
            ].map(([year, key]) => (
              <li key={year} className="flex gap-4">
                <span className="w-16 font-semibold text-teal-dark">{year}</span>
                <span className="text-muted">{t(key)}</span>
              </li>
            ))}
          </ol>
          <h2 className="mt-12 font-display text-3xl text-deep">{t("rdTitle")}</h2>
          <p className="mt-3 max-w-3xl text-muted">{t("rdBody")}</p>
          <p className="mt-4 text-sm text-deep">{t("outside")}</p>
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
