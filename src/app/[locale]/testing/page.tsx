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
  return pageMetadata(locale, "testingPage", "/testing");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("testingPage");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/lab.jpg" />
      <Container className="grid gap-6 py-16 md:grid-cols-3">
        {["step1", "step2", "step3"].map((key, index) => (
          <article key={key} className="rounded-3xl bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-dark">
              0{index + 1}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">{t(key)}</p>
          </article>
        ))}
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-8 text-muted">{t("labBody")}</p>
          <div>
            <h2 className="font-display text-2xl text-deep">{t("siteTitle")}</h2>
            <p className="mt-3 text-muted">{t("siteBody")}</p>
            <p className="mt-4 text-sm font-medium text-deep">{t("fee")}</p>
          </div>
        </Container>
      </section>
      <Container className="py-16">
        <h2 className="font-display text-3xl text-deep">{t("formTitle")}</h2>
        <p className="mt-3 mb-8 max-w-3xl text-muted">{t("formLead")}</p>
        <ContactForm kind="testing" />
      </Container>
      <OfficesGrid />
    </>
  );
}
