import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
