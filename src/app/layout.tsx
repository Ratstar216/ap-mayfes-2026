import type { Metadata, Viewport } from "next";
import {
  Big_Shoulders,
  IBM_Plex_Sans_JP,
  Zen_Maru_Gothic,
} from "next/font/google";
import { getDictionary } from "@/lib/i18n";
import "./globals.css";

const ibmPlexSansJp = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-main",
  display: "swap",
});

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-display",
  display: "swap",
  adjustFontFallback: false,
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-detail",
  display: "swap",
});

const t = getDictionary("ja");

export const metadata: Metadata = {
  metadataBase: new URL("https://ap-mayfest.com"),
  title: {
    default: t.metadata.title,
    template: `%s | ${t.siteName}`,
  },
  description: t.metadata.description,
  applicationName: t.siteName,
  authors: [{ name: t.siteName }],
  creator: t.siteName,
  publisher: t.siteName,
  alternates: {
    canonical: "/2026/",
    languages: {
      ja: "/2026/ja/",
      en: "/2026/en/",
    },
  },
  keywords: [...t.metadata.keywords],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/2026/",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${ibmPlexSansJp.variable} ${bigShoulders.variable} ${zenMaruGothic.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
