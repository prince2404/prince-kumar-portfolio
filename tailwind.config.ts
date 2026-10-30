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
        // Strict colour palette defined as CSS variable tokens
        midnight: "var(--color-midnight)",       // #030407 - Base background
        surface: "var(--color-surface)",         // #070B14 - Elevated card surface
        cobalt: "var(--color-cobalt)",           // #1558C9 - Structural borders, lines, glows
        lime: "var(--color-lime)",               // #D4FF24 - Single <10% accent & scroll dot
        primaryText: "var(--color-text-main)",   // #F2F5F7 - High-contrast headings/body
        mutedText: "var(--color-text-muted)",    // #94A3B8 - WCAG AA secondary text (7.8:1 on #030407)
      },
      fontFamily: {
        // Replaced monospace font with clean sans-serif so headings and labels never look like code
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        "cobalt-glow": "0 0 24px -4px rgba(21, 88, 201, 0.45)",
        "lime-packet": "0 0 16px 2px rgba(212, 255, 36, 0.85)",
      },
    },
  },
  plugins: [],
};

export default config;
