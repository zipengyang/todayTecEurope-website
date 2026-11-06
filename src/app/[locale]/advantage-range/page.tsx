import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { pageMetadata, localeFromParams } from "@/lib/metadata";
import {
  flatHeadGrades,
  grades,
  nearEdgeGrades,
  type GradeSlug,
} from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "advantage", "/advantage-range");
}

function GradeRow({
  slug,
  t,
}: {
  slug: GradeSlug;
  t: Awaited<ReturnType<typeof getTranslations>>;
}) {
  const grade = grades[slug];
  return (
    <tr className="border-t border-line">
      <td className="px-4 py-4 font-semibold text-deep">{grade.code}</td>
      <td className="px-4 py-4 text-muted">{t(`grades.${slug}.name`)}</td>
      <td className="px-4 py-4 capitalize">{grade.family.replace("-", " ")}</td>
      <td className="px-4 py-4">{grade.colour}</td>
      <td className="px-4 py-4">{grade.printSpeed}</td>
      <td className="px-4 py-4">
        <Link href={`/${slug}`} className="font-semibold text-teal-dark">
          {t("advantage.view")}
        </Link>
      </td>
    </tr>
  );
}

export default async function AdvantagePage({
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
        eyebrow={t("advantage.eyebrow")}
        title={t("advantage.headline")}
        body={t("advantage.intro")}
        image="/photos/boxes.jpg"
      />
      <Container className="grid gap-4 py-12 sm:grid-cols-3">
        {[t("advantage.point1"), t("advantage.point2"), t("advantage.point3")].map(
          (item) => (
            <p key={item} className="rounded-2xl bg-white p-5 text-sm leading-6 text-muted">
              {item}
            </p>
          ),
        )}
      </Container>
      <section className="bg-white py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{t("advantage.flatHead")}</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-sand">
                <tr>
                  <th className="px-4 py-3">{t("advantage.tableGrade")}</th>
                  <th className="px-4 py-3">{t("advantage.tableDesc")}</th>
                  <th className="px-4 py-3">{t("advantage.tableInk")}</th>
                  <th className="px-4 py-3">{t("advantage.tableColour")}</th>
                  <th className="px-4 py-3">{t("advantage.tableSpeed")}</th>
                  <th className="px-4 py-3">{t("advantage.tableAction")}</th>
                </tr>
              </thead>
              <tbody>
                {flatHeadGrades.map((slug) => (
                  <GradeRow key={slug} slug={slug} t={t} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-paper p-6">
              <h3 className="font-display text-xl text-deep">{t("advantage.waxPitchTitle")}</h3>
              <p className="mt-2 text-sm text-muted">{t("advantage.waxPitchBody")}</p>
            </article>
            <article className="rounded-3xl bg-paper p-6">
              <h3 className="font-display text-xl text-deep">{t("advantage.resinPitchTitle")}</h3>
              <p className="mt-2 text-sm text-muted">{t("advantage.resinPitchBody")}</p>
            </article>
          </div>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{t("advantage.nearEdge")}</h2>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-sand">
                <tr>
                  <th className="px-4 py-3">{t("advantage.tableGrade")}</th>
                  <th className="px-4 py-3">{t("advantage.tableDesc")}</th>
                  <th className="px-4 py-3">{t("advantage.tableInk")}</th>
                  <th className="px-4 py-3">{t("advantage.tableColour")}</th>
                  <th className="px-4 py-3">{t("advantage.tableSpeed")}</th>
                  <th className="px-4 py-3">{t("advantage.tableAction")}</th>
                </tr>
              </thead>
              <tbody>
                {nearEdgeGrades.map((slug) => (
                  <GradeRow key={slug} slug={slug} t={t} />
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>
      <section className="bg-teal-soft py-16">
        <Container className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-deep">{t("advantage.oemTitle")}</h2>
            <p className="mt-3 text-muted">{t("advantage.oemBody")}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-deep">{t("advantage.uniqueTitle")}</h2>
            <p className="mt-3 text-muted">{t("advantage.uniqueBody")}</p>
            <Link href="/special-development" className="mt-4 inline-block font-semibold text-teal-dark">
              {t("common.findOutMore")}
            </Link>
          </div>
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
