import type { Metadata } from "next";
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
  title: "工学博覧会 2026",
  description:
    "東京大学五月祭の応用物理展示、工学博覧会 2026 のWebサイトです。",
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
