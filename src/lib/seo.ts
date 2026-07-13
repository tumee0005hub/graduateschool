const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://graduate.mnums.edu.mn";

/**
 * Per-page canonical + hreflang alternates. `path` is the locale-less route
 * path ("" for the homepage, "/admission", `/news/${slug}`, ...). Resolved
 * against metadataBase set in the locale layout.
 */
export function localeAlternates(locale: string, path: string) {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      mn: `/mn${path}`,
      en: `/en${path}`,
      "x-default": `/mn${path}`,
    },
  };
}

/**
 * Organization + WebSite structured data. `alternateName` carries the
 * school's previous name so Google can connect the rename.
 */
export function buildJsonLd(locale: string, names: { school: string; university: string }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${BASE_URL}/#organization`,
        name: names.school,
        alternateName: [
          "Эрдмийн Сургууль",
          "АШУҮИС-ийн Ахисан Түвшний Сургууль",
          "MNUMS Graduate School",
        ],
        url: `${BASE_URL}/${locale}`,
        logo: `${BASE_URL}/icon.png`,
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: names.university,
          url: "https://www.mnums.edu.mn",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: names.school,
        alternateName: ["Эрдмийн Сургууль", "MNUMS Graduate School"],
        url: `${BASE_URL}/${locale}`,
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: ["mn", "en"],
      },
    ],
  };
}
