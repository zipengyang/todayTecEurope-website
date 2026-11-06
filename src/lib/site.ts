export const siteConfig = {
  name: "Todaytec Group Europe",
  legalName: "Todaytec Group Europe",
  shortName: "Todaytec Europe",
  domain: "todaytecgroupeurope.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://todaytecgroupeurope.com",
  description:
    "Europe’s thermal transfer ribbon experts, backed by one of the world’s largest TTR manufacturers. Wax, wax resin and resin ribbons from stock, made-to-measure converting, coating in France, and local support across the UK, Netherlands, Germany and France.",
};

export type OfficeId = "uk" | "nl" | "de" | "fr";

export const offices: Record<
  OfficeId,
  {
    id: OfficeId;
    company: string;
    group: "tts" | "calor-regma";
    address: string[];
    phone: string;
    phoneHref: string;
    email: string;
    website: string;
    websiteLabel: string;
  }
> = {
  uk: {
    id: "uk",
    company: "Thermal Transfer Solutions Ltd",
    group: "tts",
    address: [
      "Unit 27, Eagle Road",
      "Manorside Industrial Estate",
      "Redditch, Worcestershire, B98 9HE",
      "United Kingdom",
    ],
    phone: "+44 (0)1527 517577",
    phoneHref: "tel:+441527517577",
    email: "sales@tts.eu.com",
    website: "https://www.thermaltransfersolutions.com",
    websiteLabel: "thermaltransfersolutions.com",
  },
  nl: {
    id: "nl",
    company: "Thermal Transfer Solutions BV",
    group: "tts",
    address: ["De Factorij 4", "1689 AL Zwaag", "The Netherlands"],
    phone: "+31 (0)229 859 831",
    phoneHref: "tel:+31229859831",
    email: "eusales@tts.eu.com",
    website: "https://www.thermaltransfersolutions.com",
    websiteLabel: "thermaltransfersolutions.com",
  },
  de: {
    id: "de",
    company: "Calor GmbH",
    group: "calor-regma",
    address: [
      "Arnold-Sommerfeld-Ring 13",
      "52499 Baesweiler",
      "Germany",
    ],
    phone: "+49 (0)2401 9179-0",
    phoneHref: "tel:+49240191790",
    email: "info@calor.de",
    website: "https://www.calor.de",
    websiteLabel: "calor.de",
  },
  fr: {
    id: "fr",
    company: "REGMA",
    group: "calor-regma",
    address: [
      "6 Rue Verdier Monetti",
      "76880 Arques-la-Bataille",
      "France",
    ],
    phone: "+33 (0)2 35 04 86 65",
    phoneHref: "tel:+33235048665",
    email: "info@regmatt.com",
    website: "https://www.regmatt.com",
    websiteLabel: "regmatt.com",
  },
};

export const officeOrder: OfficeId[] = ["uk", "nl", "de", "fr"];

export type NavMessageKey =
  | "advantage"
  | "wax"
  | "waxResin"
  | "resin"
  | "colour"
  | "versawipes"
  | "reseller"
  | "development"
  | "customSizes"
  | "testing"
  | "branding"
  | "trx"
  | "global"
  | "europe"
  | "tts"
  | "calor"
  | "regma"
  | "news";

export type NavChild = { href: string; key: NavMessageKey };

export const navigation = {
  products: {
    href: "/advantage-range",
    children: [
      { href: "/advantage-range", key: "advantage" },
      { href: "/wax-ribbons", key: "wax" },
      { href: "/wax-resin-ribbons", key: "waxResin" },
      { href: "/resin-ribbons", key: "resin" },
      { href: "/colour-ribbons", key: "colour" },
      { href: "/versawipes", key: "versawipes" },
      { href: "/become-reseller", key: "reseller" },
    ] satisfies NavChild[],
  },
  services: {
    href: "/testing",
    children: [
      { href: "/special-development", key: "development" },
      { href: "/made-to-order", key: "customSizes" },
      { href: "/testing", key: "testing" },
      { href: "/custom-branding", key: "branding" },
      { href: "/trx", key: "trx" },
    ] satisfies NavChild[],
  },
  about: {
    href: "/todaytec-group-europe",
    children: [
      { href: "/todaytec-global", key: "global" },
      { href: "/todaytec-group-europe", key: "europe" },
      { href: "/tts", key: "tts" },
      { href: "/calor", key: "calor" },
      { href: "/regmatt", key: "regma" },
      { href: "/news", key: "news" },
    ] satisfies NavChild[],
  },
} as const;

export const pagePaths = [
  "/",
  "/advantage-range",
  "/wax-ribbons",
  "/wax-resin-ribbons",
  "/resin-ribbons",
  "/colour-ribbons",
  "/versawipes",
  "/become-reseller",
  "/special-development",
  "/made-to-order",
  "/testing",
  "/custom-branding",
  "/trx",
  "/todaytec-global",
  "/todaytec-group-europe",
  "/tts",
  "/calor",
  "/regmatt",
  "/enquiries",
  "/ribbon-sample-request",
  "/news",
  "/privacy-policy",
  "/cookie-policy",
  "/tdw108",
  "/tdw136",
  "/tdm200",
  "/tdm242",
  "/tdm665",
  "/tdm680",
  "/tdm680x",
  "/tdr345",
  "/tdr540",
] as const;

export type PagePath = (typeof pagePaths)[number];
