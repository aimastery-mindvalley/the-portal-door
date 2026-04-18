import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette pulled from the book cover
        abyss: "#030816",
        midnight: "#071233",
        deep: "#0b1e4d",
        ocean: "#133b74",
        tide: "#1e5aa8",
        sky: "#4a90e2",
        cyan: "#7dd3fc",
        frost: "#bae6fd",
        mist: "#e0f2fe",
        starlight: "#f4f9ff",
        parchment: "#f5ead0",
        gilt: "#e9c77b",
        gold: "#f5d47a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(125,211,252,0.35), 0 0 140px rgba(30,90,168,0.35)",
        book: "0 40px 120px -20px rgba(4,12,38,0.8), 0 0 80px rgba(74,144,226,0.25)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(74,144,226,0.25) 0%, rgba(11,30,77,0.0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out forwards",
        "slow-pulse": "slow-pulse 6s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
