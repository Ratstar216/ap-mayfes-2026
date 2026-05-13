import type { Metadata, Viewport } from "next";
import {
  Big_Shoulders,
  IBM_Plex_Sans_JP,
  Zen_Maru_Gothic,
} from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://ap-mayfest.com"),
  title: {
    default: "工学博覧会 2026 | 東京大学五月祭 応用物理系学科展示",
    template: "%s | 工学博覧会 2026",
  },
  description:
    "工学博覧会 2026 は、東京大学五月祭で物理工学科・計数工学科の学生が主催する展示です。ボードゲーム、セキュリティ、暗号、量子、光、物性、制御、確率統計、金融工学などを学べます。",
  applicationName: "工学博覧会 2026",
  authors: [{ name: "工学博覧会 2026" }],
  creator: "工学博覧会 2026",
  publisher: "工学博覧会 2026",
  alternates: {
    canonical: "/2026/",
  },
  keywords: [
    "工学博覧会",
    "工学博覧会 2026",
    "東京大学",
    "五月祭",
    "応用物理",
    "物理工学科",
    "計数工学科",
    "東京大学工学部",
    "本郷キャンパス",
    "量子",
    "光",
    "制御工学",
    "確率統計",
    "暗号",
    "金融工学",
    "ボードゲーム",
    "物性",
    "セキュリティ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/2026/",
    siteName: "工学博覧会 2026",
    title: "工学博覧会 2026 | 東京大学五月祭 応用物理系学科展示",
    description:
      "工学博覧会 2026 は、東京大学五月祭で物理工学科・計数工学科の学生が主催する展示です。ボードゲーム、セキュリティ、暗号、量子、光、物性、制御、確率統計、金融工学などを学べます。",
    images: [
      {
        url: "/2026/expo-assets/logo-black.svg",
        width: 650,
        height: 650,
        alt: "工学博覧会 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "工学博覧会 2026 | 東京大学五月祭 応用物理系学科展示",
    description:
      "東京大学五月祭で物理工学科・計数工学科の学生が主催する展示です。",
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
