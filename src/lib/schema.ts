import { offices, officeOrder, siteConfig } from "./site";
import { gradeOrder, grades } from "./products";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-colour.jpg`,
    description: siteConfig.description,
    email: offices.uk.email,
    telephone: offices.uk.phone,
    areaServed: {
      "@type": "Place",
      name: "Europe",
    },
    knowsAbout: [
      "thermal transfer ribbons",
      "wax ribbons",
      "wax resin ribbons",
      "resin ribbons",
      "ribbon converting",
      "private label thermal transfer ribbons",
    ],
    sameAs: [
      offices.uk.website,
      offices.de.website,
      offices.fr.website,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 27, Eagle Road, Manorside Industrial Estate",
      addressLocality: "Redditch",
      postalCode: "B98 9HE",
      addressCountry: "GB",
    },
    department: officeOrder.map((id) => {
      const office = offices[id];
      return {
        "@type": "LocalBusiness",
        name: office.company,
        email: office.email,
        telephone: office.phone,
        url: office.website,
        address: {
          "@type": "PostalAddress",
          streetAddress: office.address[0],
          addressLocality: office.address[office.address.length - 2],
          addressCountry:
            id === "uk" ? "GB" : id === "nl" ? "NL" : id === "de" ? "DE" : "FR",
        },
      };
    }),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thermal transfer ribbon converting",
          description:
            "Wax, wax resin and resin thermal transfer ribbons in 400+ stock sizes, with next-day dispatch across Europe.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ribbon testing and sample programme",
          description:
            "Free samples and laboratory ribbon testing in the UK and France, including on-site engineer visits in the UK.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom branding for resellers",
          description:
            "Free-of-charge private label box-end labels and datasheets, with no minimum order quantity on own-brand supply.",
        },
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: ["en", "fr", "de", "es"],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
  locale: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}/${locale}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function productJsonLd(slug: keyof typeof grades, name: string, description: string) {
  const grade = grades[slug];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    sku: grade.code,
    brand: {
      "@type": "Brand",
      name: "Todaytec Group Europe Advantage Range",
    },
    manufacturer: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Ink type", value: grade.family },
      { "@type": "PropertyValue", name: "Printer technology", value: grade.tech },
      { "@type": "PropertyValue", name: "Print speed", value: grade.printSpeed },
      { "@type": "PropertyValue", name: "Colour", value: grade.colour },
    ],
  };
}

export function serviceListJsonLd() {
  const services = [
    {
      name: "Thermal transfer ribbon converting",
      path: "/advantage-range",
      description:
        "Wax, wax resin and resin thermal transfer ribbons in 400+ stock sizes, with next-day dispatch across Europe.",
    },
    {
      name: "Ribbon testing and sample programme",
      path: "/testing",
      description:
        "Free samples and laboratory ribbon testing in the UK and France, including on-site engineer visits in the UK.",
    },
    {
      name: "Custom branding for resellers",
      path: "/custom-branding",
      description:
        "Free-of-charge private label box-end labels and datasheets, with no minimum order quantity on own-brand supply.",
    },
    {
      name: "Made-to-order ribbon sizes",
      path: "/made-to-order",
      description:
        "Custom widths, lengths, cores and winding, converted in Europe for OEM and reseller programmes.",
    },
    {
      name: "Special ribbon development",
      path: "/special-development",
      description:
        "Unique inks, colours, two-colour and UV ribbons developed with REGMA coating in France.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Todaytec Group Europe services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${siteConfig.url}/en${service.path}`,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: "Europe",
      },
    })),
  };
}

export function productListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Todaytec Advantage Range",
    itemListElement: gradeOrder.map((slug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/en/${slug}`,
      name: grades[slug].code,
    })),
  };
}
