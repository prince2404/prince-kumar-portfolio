import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins: Clean, non-cursive geometric sans-serif matching the Framer reference design
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased selection:bg-lime selection:text-midnight">
        {children}
      </body>
    </html>
  );
}
