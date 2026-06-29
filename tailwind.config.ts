import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        gold: {
          DEFAULT: "#C9A227",
          bright: "#D4AF37",
        },
        bordeaux: "#5C1A1A",
        cream: "#F2EDE4",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        bezel: "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
