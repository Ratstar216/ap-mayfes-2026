import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../home-client";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

const siteUrl = "https://ap-mayfest.com";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const locale = localeParam as Locale;
  const t = getDictionary(locale);
  const path = `/2026/${locale}/`;

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    applicationName: t.siteName,
    authors: [{ name: t.siteName }],
    creator: t.siteName,
    publisher: t.siteName,
    alternates: {
      canonical: path,
      languages: {
        ja: "/2026/ja/",
        en: "/2026/en/",
      },
    },
    keywords: [...t.metadata.keywords],
    openGraph: {
      type: "website",
      locale: locale === "ja" ? "ja_JP" : "en_US",
      url: path,
      siteName: t.siteName,
      title: t.metadata.title,
      description: t.metadata.description,
      images: [
        {
          url: "/2026/expo-assets/logo-black.svg",
          width: 650,
          height: 650,
          alt: t.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.twitterDescription,
      images: ["/2026/expo-assets/logo-black.svg"],
    },
    metadataBase: new URL(siteUrl),
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  return <Home locale={localeParam} />;
}
