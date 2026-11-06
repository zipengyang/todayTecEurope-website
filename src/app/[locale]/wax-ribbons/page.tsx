import { FamilyPage } from "@/components/family-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "wax", "/wax-ribbons");
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <FamilyPage
      locale={locale}
      ns="wax"
      family="wax"
      image="/photos/wax.jpg"
      points={["fast", "value", "short"]}
      why={[
        ["why1Title", "why1Body"],
        ["why2Title", "why2Body"],
        ["why3Title", "why3Body"],
        ["why4Title", "why4Body"],
      ]}
      apps={["app1", "app2", "app3", "app4", "app5", "app6"]}
    />
  );
}
