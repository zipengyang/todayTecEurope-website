import { getTranslations } from "next-intl/server";
import { BrandLogo } from "@/components/brand-logo";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { navigation, offices, officeOrder } from "@/lib/site";

export async function SiteFooter() {
  const t = await getTranslations();
  const tNav = await getTranslations("nav");
  const tOffices = await getTranslations("offices");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-2 text-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <BrandLogo variant="dark" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            {t("footer.tagline")}
          </p>
          <p className="mt-4 text-sm text-teal">{t("footer.group")}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            {t("footer.products")}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.products.children.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 hover:text-white">
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            {t("footer.services")}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.services.children.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 hover:text-white">
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
            {t("footer.company")}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navigation.about.children.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/75 hover:text-white">
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-white/75 hover:text-white">
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="text-white/75 hover:text-white">
                {t("footer.cookies")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {officeOrder.map((id) => {
            const office = offices[id];
            return (
              <div key={id} className="text-sm text-white/70">
                <p className="font-semibold text-white">{tOffices(id)}</p>
                <p className="mt-1">{office.company}</p>
                <a href={office.phoneHref} className="mt-1 block hover:text-white">
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="block hover:text-white">
                  {office.email}
                </a>
              </div>
            );
          })}
        </Container>
      </div>
      <Container className="border-t border-white/10 py-6 text-xs text-white/50">
        {t("footer.copyright", { year })}
      </Container>
    </footer>
  );
}
