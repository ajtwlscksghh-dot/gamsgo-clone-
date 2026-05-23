import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SubsShare - 프리미엄 구독 공유 플랫폼",
  description: "Netflix, ChatGPT, YouTube Premium 등 다양한 프리미엄 구독 서비스를 최대 85% 할인된 가격에 이용하세요.",
  keywords: "넷플릭스 공유, 구독 공유, chatgpt 저렴하게, 유튜브 프리미엄 할인",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
