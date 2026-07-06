import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Андрей Мелехов — Разработчик сайтов для бизнеса",
  description:
    "Создаю сайты, которые помогают бизнесу расти. Современный дизайн, высокая конверсия, продуманный UX.",
  keywords: [
    "разработка сайтов",
    "веб-разработка",
    "создание сайтов для бизнеса",
    "фронтенд-разработчик",
    "портфолио",
  ],
  authors: [{ name: "Андрей Мелехов" }],
  openGraph: {
    title: "Андрей Мелехов — Разработчик сайтов для бизнеса",
    description:
      "Создаю сайты, которые помогают бизнесу расти. Современный дизайн, высокая конверсия, продуманный UX.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}