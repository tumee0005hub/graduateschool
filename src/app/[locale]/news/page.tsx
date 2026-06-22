import { getDictionary, t, type Locale } from "@/lib/i18n";
import { getCategoryName } from "@/lib/supabase";
import { getActiveNewsList } from "@/lib/news";
import PageHero from "@/components/sections/PageHero";
import NewsListClient from "@/components/sections/NewsListClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return { title: t(dict, "newsList") };
}

function formatDate(d: string, locale: string) {
  const date = new Date(d.replace(" ", "T"));
  if (locale === "mn") {
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  let items: {
    id: number;
    title: string;
    image: string | null;
    date: string;
    slug: string;
    category: string;
    categoryCode: string;
  }[] = [];

  try {
    const data = await getActiveNewsList();
    if (data.length > 0) {
      items = data.map((n) => ({
        id: n.id,
        title: locale === "mn" ? n.title_mn : n.title_en || n.title_mn,
        image: n.news_img || n.banner_img,
        date: formatDate(n.created_at, locale),
        slug: n.slug,
        category: getCategoryName(n.category, locale),
        categoryCode: n.category,
      }));
    }
  } catch (err) {
    console.error("[news/page] getActiveNewsList failed:", err);
  }

  return (
    <>
      <PageHero title={t(dict, "newsList")} />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <NewsListClient
          locale={locale as Locale}
          items={items}
          searchPlaceholder={t(dict, "search")}
          noResultsLabel={t(dict, "notFound")}
        />
      </div>
    </>
  );
}
