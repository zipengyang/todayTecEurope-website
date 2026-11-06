import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { localeFromParams, pageMetadata } from "@/lib/metadata";
import { productJsonLd } from "@/lib/schema";
import { grades, type GradeSlug } from "@/lib/products";

export function generateGradeMetadata(slug: GradeSlug) {
  return async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
    return pageMetadata(locale, `grades.${slug}`, `/${slug}`);
  };
}

const resistanceKeys = [
  "sensitivity",
  "heat",
  "abrasion",
  "solvent",
  "adaptability",
] as const;

export async function GradeView({
  slug,
  locale,
}: {
  slug: GradeSlug;
  locale: string;
}) {
  setRequestLocale(localeFromParams(locale));
  const grade = grades[slug];
  const t = await getTranslations();
  const name = t(`grades.${slug}.name`);
  const summary = t(`grades.${slug}.summary`);

  return (
    <>
      <JsonLd data={productJsonLd(slug, `${grade.code} ${name}`, summary)} />
      <PageHero
        eyebrow={grade.code}
        title={name}
        body={summary}
        image={grade.tech === "near-edge" ? "/products/near-edge.png" : "/products/flat-head.png"}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/ribbon-sample-request"
            className="rounded-full bg-teal px-5 py-3 text-sm font-semibold"
          >
            {t("common.requestSample")}
          </Link>
          <Link
            href="/advantage-range"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold"
          >
            {t("common.viewRange")}
          </Link>
        </div>
      </PageHero>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <article>
          <p className="text-lg leading-8 text-muted">{t(`grades.${slug}.body`)}</p>
          <h2 className="mt-10 font-display text-2xl text-deep">
            {t("grades.performance")}
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
            {grade.properties.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <aside className="space-y-6">
          <div className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-display text-xl text-deep">{t("grades.specs")}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <Row label={t("grades.carrier")} value={grade.carrier} />
              <Row label={t("grades.thickness")} value={grade.thickness} />
              <Row label={t("grades.ink")} value={`${grade.family} · ${grade.tech}`} />
              <Row label={t("grades.colour")} value={grade.colour} />
              <Row label={t("grades.melt")} value={grade.meltingPoint} />
              <Row label={t("grades.density")} value={grade.density} />
            </dl>
          </div>
          <div className="rounded-3xl border border-line bg-white p-6">
            <h2 className="font-display text-xl text-deep">{t("grades.storage")}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <Row label={t("grades.temperature")} value={grade.storageTemp} />
              <Row label={t("grades.humidity")} value={grade.storageHumidity} />
              <Row label={t("grades.light")} value={t("grades.lightValue")} />
            </dl>
          </div>
        </aside>
      </Container>
      <section className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-deep">{t("grades.resistance")}</h2>
            <ul className="mt-6 space-y-4">
              {resistanceKeys.map((key) => (
                <li key={key}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{t(`grades.${key}`)}</span>
                    <span className="text-muted">{grade.resistance[key]}/10</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-sand">
                    <div
                      className="h-full rounded-full bg-teal"
                      style={{ width: `${grade.resistance[key] * 10}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-deep">{t("grades.substrates")}</h2>
            <ul className="mt-6 space-y-3">
              {grade.substrates.map((item) => (
                <li key={item.label} className="flex items-center justify-between rounded-2xl bg-paper px-4 py-3 text-sm">
                  <span>{item.label}</span>
                  <span className="font-semibold text-teal-dark">
                    {"●".repeat(item.rating)}
                    {"○".repeat(Math.max(0, 5 - item.rating))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      {grade.sizes?.length ? (
        <section className="py-16">
          <Container>
            <h2 className="font-display text-2xl text-deep">{t("grades.sizes")}</h2>
            <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-sand text-deep">
                  <tr>
                    <th className="px-4 py-3 font-semibold">{t("grades.part")}</th>
                    <th className="px-4 py-3 font-semibold">{t("grades.width")}</th>
                    <th className="px-4 py-3 font-semibold">{t("grades.length")}</th>
                    <th className="px-4 py-3 font-semibold">{t("grades.winding")}</th>
                    <th className="px-4 py-3 font-semibold">{t("grades.core")}</th>
                    <th className="px-4 py-3 font-semibold">{t("grades.box")}</th>
                  </tr>
                </thead>
                <tbody>
                  {grade.sizes.map((row) => (
                    <tr key={row.part} className="border-t border-line">
                      <td className="px-4 py-3 font-medium">{row.part}</td>
                      <td className="px-4 py-3">{row.widthMm}</td>
                      <td className="px-4 py-3">{row.lengthM}</td>
                      <td className="px-4 py-3">{row.winding}</td>
                      <td className="px-4 py-3">{row.core}</td>
                      <td className="px-4 py-3">{row.boxQty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      ) : null}
      <section className="bg-teal-soft py-16">
        <Container>
          <h2 className="font-display text-2xl text-deep">{t("grades.customTitle")}</h2>
          <p className="mt-3 max-w-3xl text-muted">{t("grades.customBody")}</p>
          <Link href="/made-to-order" className="mt-6 inline-block font-semibold text-teal-dark">
            {t("common.findOutMore")}
          </Link>
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-2">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right font-medium text-deep">{value}</dd>
    </div>
  );
}
