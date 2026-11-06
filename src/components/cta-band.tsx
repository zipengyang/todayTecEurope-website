import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";

export async function CtaBand() {
  const t = await getTranslations("common");

  return (
    <section className="bg-deep py-16 text-white">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl">{t("ctaTitle")}</h2>
          <p className="mt-3 text-white/75">{t("ctaBody")}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/enquiries"
            className="rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white hover:bg-teal-dark"
          >
            {t("contactUs")}
          </Link>
          <Link
            href="/ribbon-sample-request"
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            {t("requestSample")}
          </Link>
        </div>
      </Container>
    </section>
  );
}
