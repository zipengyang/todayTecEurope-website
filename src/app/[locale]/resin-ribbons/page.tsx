import { FamilyPage } from "@/components/family-page";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return pageMetadata(locale, "resin", "/resin-ribbons");
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
      ns="resin"
      family="resin"
      image="/photos/chemical.jpg"
      points={["point1", "point2", "point3"]}
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
