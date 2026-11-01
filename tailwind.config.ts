import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "var(--color-midnight)",       // #030407 - Base background
        surface: "var(--color-surface)",         // #090D16 - Elevated card surface
        cobalt: "var(--color-cobalt)",           // #1558C9 - Accent token
        lime: "var(--color-lime)",               // #D4FF24 - Primary interactive accent
        primaryText: "var(--color-text-main)",   // #F2F5F7 - High-contrast headings/body
        mutedText: "var(--color-text-muted)",    // #94A3B8 - Secondary text
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-dm)", "sans-serif"],
      },
      boxShadow: {
        "card-subtle": "0 8px 30px -6px rgba(0, 0, 0, 0.5)",
        "lime-packet": "0 0 14px 2px rgba(212, 255, 36, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
