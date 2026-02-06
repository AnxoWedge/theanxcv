import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        platinum: {
          DEFAULT: "#1a1a1a",
          light: "#252525",
          dark: "#121212",
          deeper: "#0a0a0a",
          muted: "#2a2a2a",
        },
        bronze: {
          DEFAULT: "#7a6652",
          light: "#9a8672",
          dark: "#5a4632",
          glow: "#7a665280",
        },
        cream: {
          DEFAULT: "#f0ede8",
          muted: "#d0cdc8",
          dark: "#a8a5a0",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Cormorant Garamond", "Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "width-expand": "widthExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "typing-cursor": "typingCursor 1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        widthExpand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typingCursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      boxShadow: {
        "bronze-glow": "0 0 60px rgba(122, 102, 82, 0.3)",
        "bronze-glow-sm": "0 0 30px rgba(122, 102, 82, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
