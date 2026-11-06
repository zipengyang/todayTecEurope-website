import { generateGradeMetadata, GradeView } from "@/components/grade-page";

export const generateMetadata = generateGradeMetadata("tdr540");

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <GradeView slug="tdr540" locale={locale} />;
}
