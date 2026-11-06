import { getTranslations } from "next-intl/server";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <Container className="py-24 text-center">
      <h1 className="font-display text-4xl text-deep">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("body")}</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white">
        {t("home")}
      </Link>
    </Container>
  );
}
