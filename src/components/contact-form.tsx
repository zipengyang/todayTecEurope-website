"use client";

import { FormEvent, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export type FormKind = "enquiry" | "sample" | "testing" | "reseller";

const extraFields: Record<FormKind, Array<"printer" | "grade" | "qty" | "substrate" | "application">> = {
  enquiry: [],
  sample: ["printer", "grade", "qty"],
  testing: ["printer", "grade", "substrate", "application"],
  reseller: ["application"],
};

export function ContactForm({ kind }: { kind: FormKind }) {
  const t = useTranslations("forms");
  const tFooter = useTranslations("footer");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fields = extraFields[kind];

  const subject = useMemo(() => {
    if (kind === "sample") return "Ribbon sample request";
    if (kind === "testing") return "Ribbon testing request";
    if (kind === "reseller") return "Reseller enquiry";
    return "Website enquiry";
  }, [kind]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    const payload = Object.fromEntries(data.entries());
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, subject, ...payload }),
      });
    } catch {
      // Still offer mailto so the form is usable without a configured webhook.
    }

    const office = String(data.get("office") || "sales@tts.eu.com");
    const body = Object.entries(payload)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    window.location.href = `mailto:${office}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("name")} name="name" required />
        <Field label={t("company")} name="company" />
        <Field label={t("email")} name="email" type="email" required />
        <Field label={t("phone")} name="phone" type="tel" />
        <Field label={t("country")} name="country" />
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-deep">{t("office")}</span>
          <select
            name="office"
            className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm"
            defaultValue="sales@tts.eu.com"
          >
            <option value="sales@tts.eu.com">{t("officeUk")}</option>
            <option value="eusales@tts.eu.com">{t("officeNl")}</option>
            <option value="info@calor.de">{t("officeDe")}</option>
            <option value="info@regmatt.com">{t("officeFr")}</option>
          </select>
        </label>
      </div>
      {fields.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map((field) => (
            <Field key={field} label={t(field)} name={field} />
          ))}
        </div>
      ) : null}
      <label className="block text-sm">
        <span className="mb-1 block font-medium text-deep">
          {t("message")} <span className="text-teal-dark">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm"
        />
      </label>
      <p className="text-xs text-muted">
        {t("privacyNote")}{" "}
        <Link href="/privacy-policy" className="underline">
          {tFooter("privacy")}
        </Link>
      </p>
      {status === "error" ? <p className="text-sm text-red-700">{t("error")}</p> : null}
      {status === "success" ? <p className="text-sm text-teal-dark">{t("success")}</p> : null}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-fit rounded-full bg-deep px-6 py-3 text-sm font-semibold text-white hover:bg-deep-2 disabled:opacity-60"
      >
        {status === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-deep">
        {label}
        {required ? <span className="text-teal-dark"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-paper px-3 py-2.5 text-sm"
      />
    </label>
  );
}
