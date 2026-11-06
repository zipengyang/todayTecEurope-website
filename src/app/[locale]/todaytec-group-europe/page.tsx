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
  return pageMetadata(locale, "europe", "/todaytec-group-europe");
}

const timeline = [
  ["1986", "t1986", "t1986Body"],
  ["1991", "t1991", "t1991Body"],
  ["2002", "t2002", "t2002Body"],
  ["2006", "t2006", "t2006Body"],
  ["2016", "t2016", "t2016Body"],
  ["2024", "t2024", "t2024Body"],
  ["2025", "t2025", "t2025Body"],
] as const;

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations();

  return (
    <>
      <PageHero
        eyebrow={t("europe.eyebrow")}
        title={t("europe.headline")}
        body={t("europe.intro")}
        image="/photos/team.jpg"
      />
      <Container className="space-y-6 py-16 text-lg leading-8 text-muted">
        <p>{t("europe.merger")}</p>
        <p>{t("europe.capacity")}</p>
        <p>{t("europe.global")}</p>
      </Container>
      <section className="bg-white py-16">
        <Container>
          <ol className="space-y-6">
            {timeline.map(([year, title, body]) => (
              <li key={year} className="grid gap-2 border-l-2 border-teal pl-6 md:grid-cols-[80px_1fr]">
                <p className="font-semibold text-teal-dark">{year}</p>
                <div>
                  <h2 className="font-display text-xl text-deep">{t(`europe.${title}`)}</h2>
                  <p className="mt-1 text-sm text-muted">{t(`europe.${body}`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <Container className="grid gap-6 py-16 md:grid-cols-3">
        {[
          ["/tts", "/photos/tts-building.jpg", "TTS"],
          ["/calor", "/photos/calor-building.jpeg", "Calor"],
          ["/regmatt", "/photos/regma-site.png", "REGMA"],
        ].map(([href, img, name]) => (
          <Link key={href} href={href} className="overflow-hidden rounded-3xl bg-white">
            <img src={img} alt="" className="h-44 w-full object-cover" />
            <p className="p-4 font-display text-xl text-deep">{name}</p>
          </Link>
        ))}
      </Container>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
