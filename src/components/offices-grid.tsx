import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { offices, officeOrder } from "@/lib/site";

export async function OfficesGrid() {
  const t = await getTranslations();

  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="font-display text-3xl text-deep">{t("common.officesTitle")}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {officeOrder.map((id) => {
            const office = offices[id];
            return (
              <article
                key={id}
                className="rounded-3xl border border-line bg-paper p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-dark">
                  {t(`offices.${id}`)}
                </p>
                <h3 className="mt-2 font-display text-xl text-deep">
                  {office.company}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="mt-4 space-y-1 text-sm">
                  <a className="block text-deep hover:text-teal-dark" href={office.phoneHref}>
                    {office.phone}
                  </a>
                  <a
                    className="block text-deep hover:text-teal-dark"
                    href={`mailto:${office.email}`}
                  >
                    {office.email}
                  </a>
                  <a
                    className="block text-teal-dark"
                    href={office.website}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {office.websiteLabel}
                  </a>
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
