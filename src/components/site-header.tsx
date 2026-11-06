"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { BrandLogo } from "@/components/brand-logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Link } from "@/i18n/navigation";
import { navigation } from "@/lib/site";

export function SiteHeader() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);

  const menus = [
    { id: "products", label: t("products"), ...navigation.products },
    { id: "services", label: t("services"), ...navigation.services },
    { id: "about", label: t("about"), ...navigation.about },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-deep/95 text-white backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <BrandLogo variant="dark" />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="relative"
              onMouseEnter={() => setPanel(menu.id)}
              onMouseLeave={() => setPanel(null)}
              onFocusCapture={() => setPanel(menu.id)}
            >
              <Link
                href={menu.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white"
                aria-expanded={panel === menu.id}
                aria-haspopup="true"
              >
                {menu.label}
              </Link>
              {panel === menu.id ? (
                <div className="absolute left-0 top-full w-64 pt-2">
                  <div className="rounded-2xl border border-white/10 bg-deep-2 p-2 shadow-xl">
                    {menu.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          <Link
            href="/enquiries"
            className="rounded-full px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10"
          >
            {t("enquiries")}
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher invert />
          <Link
            href="/ribbon-sample-request"
            className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-teal-dark"
          >
            {t("samples")}
          </Link>
        </div>
        <button
          type="button"
          className="ml-auto inline-flex shrink-0 items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-deep lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? t("close") : t("menu")}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-deep-2 px-5 py-4 lg:hidden">
          {menus.map((menu) => (
            <div key={menu.id} className="mb-4">
              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-teal">
                {menu.label}
              </p>
              {menu.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block py-2 text-sm text-white/85"
                  onClick={() => setOpen(false)}
                >
                  {t(child.key)}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/enquiries"
            className="block py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            {t("enquiries")}
          </Link>
          <div className="mt-4 flex items-center justify-between gap-3">
            <LocaleSwitcher invert />
            <Link
              href="/ribbon-sample-request"
              className="rounded-full bg-teal px-4 py-2 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              {t("samples")}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
