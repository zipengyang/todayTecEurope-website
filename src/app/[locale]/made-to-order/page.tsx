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
  return pageMetadata(locale, "madeToOrder", "/made-to-order");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("madeToOrder");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/jumbo-rolls.jpg" />
      <Container className="grid gap-6 py-16 md:grid-cols-2">
        <article className="rounded-3xl bg-white p-6">
          <h2 className="font-display text-xl text-deep">{t("labelTitle")}</h2>
          <p className="mt-2 text-sm text-muted">{t("labelBody")}</p>
        </article>
        <article className="rounded-3xl bg-white p-6">
          <h2 className="font-display text-xl text-deep">{t("packTitle")}</h2>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {["pack1", "pack2", "pack3", "pack4", "pack5"].map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </article>
        {[
          ["qtyTitle", "qtyBody"],
          ["leadTitle", "leadBody"],
          ["returnsTitle", "returnsBody"],
          ["pricingTitle", "pricingBody"],
        ].map(([title, body]) => (
          <article key={title} className="rounded-3xl border border-line p-6">
            <h2 className="font-display text-xl text-deep">{t(title)}</h2>
            <p className="mt-2 text-sm text-muted">{t(body)}</p>
          </article>
        ))}
      </Container>
      <Container className="pb-16">
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
