import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "Consolas", "monospace"],
      },
      colors: {
        background: {
          DEFAULT: "#0f172a",
          secondary: "#111827",
          card: "#1e293b",
        },
        foreground: {
          DEFAULT: "#e5e7eb",
          secondary: "#9ca3af",
          muted: "#6b7280",
        },
        accent: {
          DEFAULT: "#7c3aed",
          hover: "#6d28d9",
          light: "#a78bfa",
          muted: "rgba(124, 58, 237, 0.1)",
        },
        border: {
          DEFAULT: "#1f2937",
          light: "#374151",
        },
      },
      maxWidth: {
        content: "48rem", // max-w-3xl
        section: "64rem", // max-w-5xl
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e5e7eb",
            a: { color: "#7c3aed" },
            strong: { color: "#f3f4f6" },
            h1: { color: "#f3f4f6" },
            h2: { color: "#f3f4f6" },
            h3: { color: "#f3f4f6" },
            code: { color: "#a78bfa" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
