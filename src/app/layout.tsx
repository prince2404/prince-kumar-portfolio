import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted display font for headings (zero layout shift)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Clean, easy-to-read sans-serif font for body and labels (no code/monospace look)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prince-kumar-portfolio-five.vercel.app"), // Replace with your production domain
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}
    >
      <body className="font-sans antialiased selection:bg-lime selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
