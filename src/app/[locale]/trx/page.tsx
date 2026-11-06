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
  return pageMetadata(locale, "trx", "/trx");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("trx");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/warehouse-product.jpg" />
      <Container className="py-16">
        <h2 className="font-display text-3xl text-deep">{t("whyTitle")}</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {["win", "earn", "retain", "risk", "support", "repeat"].map((key) => (
            <li key={key} className="rounded-3xl bg-white p-5 text-sm leading-6 text-muted">
              {t(key)}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-muted">{t("range")}</p>
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            ["priceTitle", "priceBody"],
            ["testTitle", "testBody"],
            ["sorTitle", "sorBody"],
            ["siteTitle", "siteBody"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl border border-line p-6">
              <h2 className="font-display text-xl text-deep">{t(title)}</h2>
              <p className="mt-2 text-sm text-muted">{t(body)}</p>
            </article>
          ))}
        </Container>
      </section>
      <Container className="py-16">
        <h2 className="font-display text-3xl text-deep">{t("cta")}</h2>
      </Container>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
