import { t, type Locale } from "@/lib/i18n";
import { getLatestNews } from "@/lib/news";
import { NewsPreviewClient } from "./NewsPreviewClient";

interface NewsPreviewProps {
  locale: Locale;
  dict: Record<string, unknown>;
}

export default async function NewsPreview({ locale, dict }: NewsPreviewProps) {
  const formatDate = (d: string) => {
    const date = new Date(d.replace(" ", "T"));
    if (locale === "mn") {
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  let newsItems: {
    id: number;
    title: string;
    image: string | null;
    date: string;
    slug: string;
  }[] = [];

  try {
    const data = await getLatestNews(4);
    if (data.length > 0) {
      newsItems = data.map((item) => ({
        id: item.id,
        title: locale === "mn" ? item.title_mn : item.title_en || item.title_mn,
        image: item.news_img || item.banner_img,
        date: formatDate(item.created_at),
        slug: item.slug,
      }));
    }
  } catch (err) {
    console.error("[NewsPreview] getLatestNews failed:", err);
  }

  return (
    <NewsPreviewClient
      locale={locale}
      newsListLabel={t(dict, "newsList")}
      seeAllLabel={t(dict, "seeAll")}
      newsItems={newsItems}
    />
  );
}
