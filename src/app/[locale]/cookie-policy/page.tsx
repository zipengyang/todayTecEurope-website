import { getTranslations, setRequestLocale } from "next-intl/server";
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
  return pageMetadata(locale, "cookiesPage", "/cookie-policy");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("cookiesPage");

  return (
    <>
      <PageHero title={t("headline")} />
      <Container className="max-w-3xl space-y-8 py-16">
        <section>
          <h2 className="font-display text-2xl text-deep">{t("helpTitle")}</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
            <li>{t("help1")}</li>
            <li>{t("help2")}</li>
            <li>{t("help3")}</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-deep">{t("notTitle")}</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
            <li>{t("not1")}</li>
            <li>{t("not2")}</li>
            <li>{t("not3")}</li>
            <li>{t("not4")}</li>
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl text-deep">{t("grantTitle")}</h2>
          <p className="mt-3 leading-7 text-muted">{t("grantBody")}</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-deep">{t("offTitle")}</h2>
          <p className="mt-3 leading-7 text-muted">{t("offBody")}</p>
        </section>
      </Container>
      <OfficesGrid />
    </>
  );
}
