# Todaytec Group Europe website

Marketing site for [todaytecgroupeurope.com](https://todaytecgroupeurope.com), rebuilt in Next.js App Router with Tailwind CSS and next-intl.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default locale is prefixed (`/en`).

```bash
npm run i18n:check
npm run build
```

## Conventions

- Every user-visible string lives in `messages/en.json`, `fr.json`, `de.json`, and `es.json`.
- English is the source of truth; other locales merge over it at runtime.
- Contact forms POST to `/api/contact`. If `CONTACT_WEBHOOK_URL` is set, the payload is forwarded; otherwise the browser opens a `mailto:` to the chosen office.

## Brand

Teal `#16958e` and deep teal `#003b47`, matching Todaytec Group Europe.
