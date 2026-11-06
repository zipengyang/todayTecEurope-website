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
  return pageMetadata(locale, "calor", "/calor");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations("calor");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("headline")} body={t("intro")} image="/photos/calor-building.jpeg" />
      <Container className="py-16">
        <p className="max-w-3xl text-lg text-muted">{t("group")}</p>
        <p className="mt-4 font-display text-2xl text-deep">{t("machines")}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["/photos/converter.jpg", "converter", "converterBody"],
            ["/photos/coater.jpg", "coater", "coaterBody"],
            ["/photos/developer.jpg", "developer", "developerBody"],
          ].map(([img, title, body]) => (
            <article key={title} className="overflow-hidden rounded-3xl bg-white">
              <img src={img} alt="" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h2 className="font-display text-xl text-deep">{t(title)}</h2>
                <p className="mt-2 text-sm text-muted">{t(body)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
      <section className="bg-white py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{t("allround")}</h2>
          <p className="mt-3 max-w-3xl text-muted">{t("allroundBody")}</p>
          <ol className="mt-10 space-y-3 text-sm text-muted">
            {[
              "t1991",
              "t1998",
              "t2002",
              "t2007",
              "t2009",
              "t2012",
              "t2017",
              "t2021",
              "t2023",
              "t2025",
            ].map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ol>
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
