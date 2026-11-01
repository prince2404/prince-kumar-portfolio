import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

// Executive, modern geometric display font for headings & titles (Outfit)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

// Clean, simple, readable sans-serif with natural character spacing (DM Sans)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm",
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
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased selection:bg-lime selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
