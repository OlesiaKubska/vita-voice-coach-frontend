import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#214424",
          rose: "#D96689",
          beige: "#F6F2EE",
          sage: "#798478",
        },
      },
      typography: ({ theme }) => ({
        brand: {
          css: {
            "--tw-prose-body": "var(--brand-sage)",
            "--tw-prose-headings": "var(--brand-green)",
            "--tw-prose-links": "var(--brand-rose)",
            "--tw-prose-bold": "var(--brand-green)",
            "--tw-prose-hr": theme("colors.gray.300"),

            p: { marginTop: "1rem", marginBottom: "1rem", lineHeight: "1.9" },
            "ul,ol": { marginTop: "1.25rem", marginBottom: "1.25rem" },
            "ul > li::marker": { content: '"✦ "', color: "var(--brand-rose)" },
            "a": {
              color: "var(--brand-rose)",
              textDecoration: "none",
              borderBottom: "1px dotted currentColor",
              transition: "color .2s ease",
            },
            "a:hover": { color: "var(--brand-green)" },
            hr: {
              borderColor: "var(--brand-rose)",
              opacity: "0.4",
              marginTop: "1.75rem",
              marginBottom: "1.75rem",
            },
            img: { borderRadius: theme("borderRadius.lg") },
            code: {
              backgroundColor: "rgba(217,102,137,0.1)",
              padding: "0.125rem 0.375rem",
              borderRadius: "0.375rem",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.zinc.200"),
            "--tw-prose-headings": "var(--brand-beige)",
            "--tw-prose-links": "var(--brand-rose)",
            "--tw-prose-bold": "var(--brand-beige)",
            "--tw-prose-hr": "rgba(255,255,255,.2)",
            "ul > li::marker": { color: "var(--brand-rose)" },
            hr: { borderColor: "rgba(255,255,255,.2)" },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;