import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { pageMetadata, localeFromParams } from "@/lib/metadata";
import { colourTables } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "colour", "/colour-ribbons");
}

function ColourTable({
  title,
  rows,
  labels,
}: {
  title: string;
  rows: { colour: string; ref: string; widthMm: number; lengthM: number }[];
  labels: { colour: string; ref: string; width: string; length: string };
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-line bg-white">
      <h3 className="border-b border-line px-4 py-3 font-display text-lg text-deep">
        {title}
      </h3>
      <table className="min-w-full text-left text-sm">
        <thead className="bg-sand">
          <tr>
            <th className="px-4 py-2">{labels.colour}</th>
            <th className="px-4 py-2">{labels.ref}</th>
            <th className="px-4 py-2">{labels.width}</th>
            <th className="px-4 py-2">{labels.length}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.ref}-${row.colour}`} className="border-t border-line">
              <td className="px-4 py-2">{row.colour}</td>
              <td className="px-4 py-2 font-medium">{row.ref}</td>
              <td className="px-4 py-2">{row.widthMm}</td>
              <td className="px-4 py-2">{row.lengthM}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ColourPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations();
  const labels = {
    colour: t("colour.colColour"),
    ref: t("colour.colRef"),
    width: t("colour.colWidth"),
    length: t("colour.colLength"),
  };

  return (
    <>
      <PageHero
        eyebrow={t("colour.eyebrow")}
        title={t("colour.headline")}
        body={t("colour.intro")}
        image="/photos/colour-printer.jpg"
      />
      <Container className="py-12">
        <p className="max-w-3xl text-lg text-muted">{t("colour.lead")}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["infinite", "infiniteBody"],
            ["anyPrinter", "anyPrinterBody"],
            ["free", "freeBody"],
            ["own", "ownBody"],
          ].map(([title, body]) => (
            <article key={title} className="rounded-3xl bg-white p-5">
              <h2 className="font-display text-lg text-deep">{t(`colour.${title}`)}</h2>
              <p className="mt-2 text-sm text-muted">{t(`colour.${body}`)}</p>
            </article>
          ))}
        </div>
      </Container>
      <section className="bg-white py-16">
        <Container className="space-y-8">
          <h2 className="font-display text-3xl text-deep">{t("colour.flatHead")}</h2>
          <ColourTable title={t("colour.flatWax")} rows={colourTables.flatHeadWax} labels={labels} />
          <ColourTable title={t("colour.flatWaxResin")} rows={colourTables.flatHeadWaxResin} labels={labels} />
          <ColourTable title={t("colour.flatResin")} rows={colourTables.flatHeadResin} labels={labels} />
          <ColourTable title={t("colour.flatOutdoor")} rows={colourTables.flatHeadOutdoorResin} labels={labels} />
          <h2 className="font-display text-3xl text-deep">{t("colour.nearEdge")}</h2>
          <ColourTable title={t("colour.nearWaxResin")} rows={colourTables.nearEdgeWaxResin} labels={labels} />
          <ColourTable title={t("colour.nearResin")} rows={colourTables.nearEdgeResin} labels={labels} />
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
