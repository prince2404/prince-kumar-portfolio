import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// Executive, modern geometric display font for headings & interactive titles
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

// Ultra-clean, highly legible professional sans-serif for body copy & UI controls
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prince-kumar-portfolio-five.vercel.app"),
  title: "Prince Kumar | Java Backend Developer",
  description:
    "Portfolio of Prince Kumar, a Java Backend Developer skilled in Spring Boot and SQL.",
  keywords: [
    "Prince Kumar",
    "Java Backend Developer",
    "Spring Boot",
    "SQL",
    "Java 17",
    "Software Engineer Delhi",
  ],
  openGraph: {
    title: "Prince Kumar | Java Backend Developer",
    description:
      "Portfolio of Prince Kumar, a Java Backend Developer skilled in Spring Boot and SQL.",
    url: "https://prince-kumar-portfolio-five.vercel.app",
    siteName: "Prince Kumar Portfolio",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-lime selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
