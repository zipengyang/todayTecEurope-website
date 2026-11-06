import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
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
  return pageMetadata(locale, "reseller", "/become-reseller");
}

const blocks = [
  ["sourceTitle", "sourceBody"],
  ["compatTitle", "compatBody"],
  ["loyaltyTitle", "loyaltyBody"],
  ["valueTitle", "valueBody"],
  ["propTitle", "propBody"],
  ["rangeTitle", "rangeBody"],
  ["stockTitle", "stockBody"],
  ["specialTitle", "specialBody"],
  ["pricingTitle", "pricingBody"],
  ["marketingTitle", "marketingBody"],
  ["samplesTitle", "samplesBody"],
  ["techTitle", "techBody"],
] as const;

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("reseller");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/sales.jpg" />
      <Container className="grid gap-6 py-16 md:grid-cols-2">
        {blocks.map(([title, body]) => (
          <article key={title} className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-display text-xl text-deep">{t(title)}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{t(body)}</p>
          </article>
        ))}
      </Container>
      <section className="bg-teal-soft py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{t("brandTitle")}</h2>
          <p className="mt-3 max-w-3xl text-muted">{t("brandBody")}</p>
          <p className="mt-6 font-display text-2xl text-deep">{t("join")}</p>
        </Container>
      </section>
      <Container className="py-16">
        <h2 className="mb-6 font-display text-3xl text-deep">{t("formTitle")}</h2>
        <ContactForm kind="reseller" />
      </Container>
      <OfficesGrid />
    </>
  );
}
