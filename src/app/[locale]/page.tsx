import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { JsonLd } from "@/components/json-ld";
import { OfficesGrid } from "@/components/offices-grid";
import { SectionHeading } from "@/components/section-heading";
import { Link } from "@/i18n/navigation";
import { pageMetadata, localeFromParams } from "@/lib/metadata";
import { productListJsonLd, serviceListJsonLd } from "@/lib/schema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "home", "/");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(localeFromParams(locale));
  const t = await getTranslations();

  return (
    <>
      <JsonLd data={serviceListJsonLd()} />
      <JsonLd data={productListJsonLd()} />
      <section className="relative min-h-[78vh] overflow-hidden bg-deep text-white">
        <Image
          src="/photos/factory.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/85 to-deep/45" />
        <Container className="relative grid min-h-[78vh] items-center gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rise">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              {t("home.eyebrow")}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
              {t("home.heroBody")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/advantage-range"
                className="rounded-full bg-teal px-6 py-3 text-sm font-semibold hover:bg-teal-dark"
              >
                {t("home.heroPrimary")}
              </Link>
              <Link
                href="/ribbon-sample-request"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {t("home.heroSecondary")}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["/photos/jumbo-rolls.jpg", t("common.madeInEurope")],
              ["/photos/warehouse.jpg", t("common.fromStock")],
              ["/photos/delivery.jpg", t("common.nextDay")],
              ["/products/tts-roll.png", t("common.oemQuality")],
            ].map(([src, label]) => (
              <figure
                key={src}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <img src={src} alt="" className="h-36 w-full object-cover sm:h-44" />
                <figcaption className="px-3 py-2 text-xs text-white/80">{label}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            t("home.proofRange"),
            t("home.proofStock"),
            t("home.proofColour"),
            t("home.proofMeasure"),
            t("home.proofCustom"),
          ].map((item) => (
            <p
              key={item}
              className="rounded-2xl bg-paper px-4 py-4 text-sm font-medium text-deep"
            >
              {item}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["home.statCapacity", "home.statCapacityLabel"],
            ["home.statEurope", "home.statEuropeLabel"],
            ["home.statLines", "home.statLinesLabel"],
            ["home.statSizes", "home.statSizesLabel"],
          ].map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-line bg-white p-6">
              <p className="font-display text-3xl text-deep">{t(value)}</p>
              <p className="mt-2 text-sm text-muted">{t(label)}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow={t("home.applicationsEyebrow")}
            title={t("home.applicationsTitle")}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { href: "/wax-ribbons", img: "/photos/wax.jpg", title: t("home.waxTitle"), body: t("home.waxBody") },
              { href: "/wax-resin-ribbons", img: "/photos/courier.jpg", title: t("home.waxResinTitle"), body: t("home.waxResinBody") },
              { href: "/resin-ribbons", img: "/photos/chemical.jpg", title: t("home.resinTitle"), body: t("home.resinBody") },
              { href: "/colour-ribbons", img: "/photos/colour-ribbons.jpg", title: t("home.colourTitle"), body: t("home.colourBody") },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group overflow-hidden rounded-3xl border border-line bg-paper"
              >
                <img src={card.img} alt="" className="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="font-display text-xl text-deep">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/products/advantage.png"
            alt=""
            className="w-full rounded-3xl border border-line bg-white object-contain p-8"
          />
          <div>
            <SectionHeading
              eyebrow={t("home.advantageEyebrow")}
              title={t("home.advantageTitle")}
              body={t("home.advantageBody")}
            />
            <Link
              href="/advantage-range"
              className="mt-6 inline-flex rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white"
            >
              {t("common.viewRange")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-deep py-20 text-white">
        <Container>
          <SectionHeading invert title={t("home.servicesTitle")} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { href: "/custom-branding", title: t("home.ownBrandTitle"), body: t("home.ownBrandBody"), img: "/photos/yob-pack.jpg" },
              { href: "/testing", title: t("home.samplesTitle"), body: t("home.samplesBody"), img: "/photos/lab.jpg" },
              { href: "/trx", title: t("home.trxTitle"), body: t("home.trxBody"), img: "/brand/trx.png" },
            ].map((card) => (
              <Link key={card.href} href={card.href} className="overflow-hidden rounded-3xl bg-white/5">
                <img src={card.img} alt="" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-xl">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{card.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title={t("home.networkTitle")} body={t("home.networkBody")} />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/todaytec-group-europe" className="rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white">
                {t("common.findOutMore")}
              </Link>
              <Link href="/tts" className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-deep">
                TTS
              </Link>
              <Link href="/calor" className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-deep">
                Calor
              </Link>
              <Link href="/regmatt" className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-deep">
                REGMA
              </Link>
            </div>
          </div>
          <img src="/photos/euromap.jpg" alt="" className="rounded-3xl object-cover" />
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <img src="/photos/tts-building.jpg" alt="" className="rounded-3xl object-cover" />
          <div>
            <SectionHeading
              eyebrow={t("home.newsEyebrow")}
              title={t("home.newsTitle")}
              body={t("home.newsBody")}
            />
            <Link href="/news" className="mt-6 inline-block font-semibold text-teal-dark">
              {t("common.readMore")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="rounded-[2rem] bg-teal-soft p-8 sm:p-12">
          <h2 className="font-display text-3xl text-deep">{t("home.joinTitle")}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t("home.joinBody")}</p>
          <Link
            href="/become-reseller"
            className="mt-6 inline-flex rounded-full bg-deep px-5 py-3 text-sm font-semibold text-white"
          >
            {t("nav.reseller")}
          </Link>
        </Container>
      </section>

      <OfficesGrid />
      <CtaBand />
    </>
  );
}
