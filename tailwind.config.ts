import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F9FC",
        surface: "#FFFFFF",
        border: "#E2E8F0",
        muted: "#94A3B8",
        brand: {
          DEFAULT: "#0C1B2A",
          50: "#F1F5FA",
          100: "#DCE5F1",
          200: "#C2D1E4",
          300: "#99B5D3",
          400: "#6F92BD",
          500: "#4A6E9F",
          600: "#33507B",
          700: "#23385A",
          800: "#16223C",
          900: "#0C1729",
        },
        accent: {
          DEFAULT: "#1ECAD3",
          foreground: "#041114",
        },
        secondary: {
          DEFAULT: "#6C74FF",
          foreground: "#F8FAFF",
        },
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626",
      },
      boxShadow: {
        card: "0 8px 30px rgba(15, 23, 42, 0.08)",
        soft: "0 4px 10px rgba(15, 23, 42, 0.04)",
      },
      borderRadius: {
        xl: "1.5rem",
        lg: "1rem",
      },
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
