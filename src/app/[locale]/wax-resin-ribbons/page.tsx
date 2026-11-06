import { FamilyPage } from "@/components/family-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "waxResin", "/wax-resin-ribbons");
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
      ns="waxResin"
      family="wax-resin"
      image="/photos/courier.jpg"
      points={["point1", "point2", "point3"]}
      why={[
        ["why1Title", "why1Body"],
        ["why2Title", "why2Body"],
        ["why3Title", "why3Body"],
      ]}
      apps={["app1", "app2", "app3", "app4", "app5", "app6"]}
    />
  );
}
