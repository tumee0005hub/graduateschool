import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MNUMS Graduate School of Medical Science",
  description:
    "Mongolian National University of Medical Sciences - Graduate School of Medical Science",
  verification: {
    google: "0V9vOnwS6hL7KgOh9YHa5CK83J71Ua6xbxQcR9RV2lI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
