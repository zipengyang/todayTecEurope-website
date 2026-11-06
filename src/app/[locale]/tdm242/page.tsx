import { generateGradeMetadata, GradeView } from "@/components/grade-page";

export const generateMetadata = generateGradeMetadata("tdm242");

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <GradeView slug="tdm242" locale={locale} />;
}
