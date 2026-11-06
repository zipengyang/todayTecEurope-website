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
  return pageMetadata(locale, "development", "/special-development");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("development");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/lab.jpg" />
      <Container className="grid gap-6 py-16 md:grid-cols-3">
        {[
          ["inkTitle", "inkBody"],
          ["colourTitle", "colourBody"],
          ["sizeTitle", "sizeBody"],
        ].map(([title, body]) => (
          <article key={title} className="rounded-3xl bg-white p-6">
            <h2 className="font-display text-xl text-deep">{t(title)}</h2>
            <p className="mt-2 text-sm text-muted">{t(body)}</p>
          </article>
        ))}
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-8 md:grid-cols-3">
          {[
            ["fieldsTitle", "fieldsBody"],
            ["qtyTitle", "qtyBody"],
            ["returnsTitle", "returnsBody"],
          ].map(([title, body]) => (
            <div key={title}>
              <h2 className="font-display text-xl text-deep">{t(title)}</h2>
              <p className="mt-2 text-sm text-muted">{t(body)}</p>
            </div>
          ))}
        </Container>
      </section>
      <Container className="py-16">
        <p className="max-w-3xl text-muted">{t("check")}</p>
        <Link href="/advantage-range" className="mt-4 inline-block font-semibold text-teal-dark">
          {tCommon("viewRange")}
        </Link>
      </Container>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
