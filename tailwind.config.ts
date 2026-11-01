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
        primaryText: "var(--color-text-main)",   // #FFFFFF - Crisp white headings
        mutedText: "var(--color-text-muted)",    // #9E9EA4 - Smooth readable body grey
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
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
