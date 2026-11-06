import { generateGradeMetadata, GradeView } from "@/components/grade-page";

export const generateMetadata = generateGradeMetadata("tdr345");

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <GradeView slug="tdr345" locale={locale} />;
}
