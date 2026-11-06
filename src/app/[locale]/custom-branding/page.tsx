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
  return pageMetadata(locale, "branding", "/custom-branding");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("branding");
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/branding.jpg" />
      <Container className="grid gap-6 py-16 md:grid-cols-3">
        {["point1", "point2", "point3"].map((key) => (
          <p key={key} className="rounded-3xl bg-white p-6 text-sm leading-6 text-muted">
            {t(key)}
          </p>
        ))}
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-8 lg:grid-cols-2">
          <img src="/products/box-label.jpg" alt="" className="rounded-3xl object-cover" />
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-deep">{t("boxTitle")}</h2>
              <p className="mt-2 text-muted">{t("boxBody")}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-deep">{t("dataTitle")}</h2>
              <p className="mt-2 text-muted">{t("dataBody")}</p>
            </div>
            <p className="font-semibold text-teal-dark">{t("noMoq")}</p>
            <Link href="/enquiries" className="inline-flex rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white">
              {tCommon("contactUs")}
            </Link>
          </div>
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
