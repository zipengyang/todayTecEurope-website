import { generateGradeMetadata, GradeView } from "@/components/grade-page";

export const generateMetadata = generateGradeMetadata("tdw108");

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <GradeView slug="tdw108" locale={locale} />;
}
