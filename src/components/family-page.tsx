import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { OfficesGrid } from "@/components/offices-grid";
import { PageHero } from "@/components/page-hero";
import { Link } from "@/i18n/navigation";
import { localeFromParams } from "@/lib/metadata";
import { gradeOrder, grades, type InkFamily } from "@/lib/products";

export async function FamilyPage({
  ns,
  family,
  image,
  points,
  why,
  apps,
  locale,
}: {
  ns: "wax" | "waxResin" | "resin";
  family: InkFamily;
  image: string;
  points: string[];
  why: Array<[string, string]>;
  apps: string[];
  locale: string;
}) {
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations();
  const tFamily = await getTranslations(ns);
  const related = gradeOrder.filter((slug) => grades[slug].family === family);
  const msg = (key: string) => tFamily(key as never);

  return (
    <>
      <PageHero
        eyebrow={tFamily("eyebrow")}
        title={tFamily("headline")}
        body={tFamily("intro")}
        image={image}
      />
      <Container className="grid gap-4 py-12 sm:grid-cols-3">
        {points.map((key) => (
          <p key={key} className="rounded-2xl bg-white p-5 font-medium text-deep">
            {msg(key)}
          </p>
        ))}
      </Container>
      <section className="bg-white py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{tFamily("whyTitle")}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {why.map(([title, body]) => (
              <article key={title} className="rounded-3xl bg-paper p-6">
                <h3 className="font-display text-xl text-deep">{msg(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{msg(body)}</p>
              </article>
            ))}
          </div>
          <h2 className="mt-14 font-display text-3xl text-deep">{tFamily("appsTitle")}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {apps.map((key) => (
              <li key={key} className="rounded-2xl border border-line px-4 py-3 text-sm">
                {msg(key)}
              </li>
            ))}
          </ul>
          {ns === "wax" ? (
            <p className="mt-8 text-sm font-medium text-teal-dark">{t("wax.guarantee")}</p>
          ) : null}
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <h2 className="font-display text-3xl text-deep">{t("home.advantageTitle")}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((slug) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="rounded-3xl border border-line bg-white p-6 hover:border-teal"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-dark">
                  {grades[slug].code}
                </p>
                <h3 className="mt-2 font-display text-xl text-deep">
                  {t(`grades.${slug}.name`)}
                </h3>
                <p className="mt-2 text-sm text-muted">{t(`grades.${slug}.summary`)}</p>
              </Link>
            ))}
          </div>
          {ns === "wax" ? (
            <p className="mt-8 max-w-3xl text-sm text-muted">{t("wax.finderBody")}</p>
          ) : null}
        </Container>
      </section>
      <OfficesGrid />
      <CtaBand />
    </>
  );
}
