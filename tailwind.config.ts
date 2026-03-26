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
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "Consolas", "monospace"],
      },
      colors: {
        navy: {
          950: "hsl(210, 30%, 6%)",
          900: "hsl(210, 30%, 8%)",
          850: "hsl(210, 28%, 11%)",
          800: "hsl(210, 25%, 14%)",
          700: "hsl(210, 22%, 18%)",
          600: "hsl(210, 20%, 24%)",
          500: "hsl(210, 18%, 32%)",
          400: "hsl(210, 16%, 44%)",
          300: "hsl(210, 14%, 60%)",
          200: "hsl(210, 12%, 76%)",
          100: "hsl(210, 10%, 88%)",
        },
        hotpink: {
          DEFAULT: "hsl(340, 95%, 60%)",
          light: "hsl(340, 95%, 70%)",
          dark: "hsl(340, 95%, 45%)",
        },
        neon: {
          cyan: "hsl(185, 100%, 55%)",
          yellow: "hsl(50, 100%, 55%)",
          green: "hsl(145, 80%, 55%)",
          purple: "hsl(260, 80%, 65%)",
          blue: "hsl(220, 90%, 65%)",
        },
      },
      animation: {
        "bounce-in": "bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "dot-float": "dotFloat 4s ease-in-out infinite",
      },
      keyframes: {
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        dotFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(3deg)" },
          "66%": { transform: "translateY(4px) rotate(-2deg)" },
        },
      },
      transitionTimingFunction: {
        bouncy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
