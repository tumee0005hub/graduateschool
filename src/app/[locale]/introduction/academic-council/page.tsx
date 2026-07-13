import { getDictionary, t, type Locale } from "@/lib/i18n";
import PageHero from "@/components/sections/PageHero";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    title: t(getDictionary(locale as Locale), "menu.academicCouncil"),
    alternates: localeAlternates(locale, "/introduction/academic-council"),
  };
}

export default async function AcademicCouncilPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <PageHero title={t(dict, "menu.academicCouncil")} />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <p className="text-foreground/85 leading-[1.85] text-base">
          {locale === "mn" ? "Удахгүй..." : "Coming soon..."}
        </p>
      </div>
    </>
  );
}
