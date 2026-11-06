"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const KEY = "tte-cookie-ok";

export function CookieBanner() {
  const t = useTranslations("cookie");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(KEY) !== "1");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 sm:p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-line bg-white/95 p-3 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:p-4">
        <p className="flex-1 text-sm text-muted">
          {t("message")}{" "}
          <Link href="/cookie-policy" className="text-teal-dark underline">
            {t("policy")}
          </Link>
        </p>
        <button
          type="button"
          className="rounded-full bg-deep px-4 py-2 text-sm font-semibold text-white"
          onClick={() => {
            window.localStorage.setItem(KEY, "1");
            setVisible(false);
          }}
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
