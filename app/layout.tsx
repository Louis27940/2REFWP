import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Louis Simon | Développeur Web Freelance à Caen",
  description:
    "Louis Simon, développeur web freelance à Caen, conçoit des sites rapides en Next.js, optimisés SEO et orientés conversion.",
  metadataBase: new URL("https://www.louis-simon.dev"),
  openGraph: {
    title: "Louis Simon | Développeur Web Freelance à Caen",
    description:
      "Développeur web freelance à Caen, spécialisé Next.js et SEO pour des sites performants et orientés business.",
    url: "https://www.louis-simon.dev",
    siteName: "Louis Simon | Freelance Next.js",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://www.louis-simon.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
