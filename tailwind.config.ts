import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        surface: "#0f1115",
        card: "#151922",
        accent: "#7dd3fc",
      },
      boxShadow: {
        glow: "0 15px 60px rgba(125, 211, 252, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
