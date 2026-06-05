import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0f131c",
          dim: "#0f131c",
          bright: "#353943",
          variant: "#31353f"
        },
        "surface-container": {
          DEFAULT: "#1c1f29",
          low: "#181b25",
          high: "#262a34",
          lowest: "#0a0e17"
        },
        "on-surface": "#dfe2ef",
        "on-background": "#dfe2ef",
        "primary-container": "#50fa7b",
        "on-primary-container": "#00702c",
        "primary-fixed": "#69ff88",
        secondary: "#d7baff",
        "secondary-container": "#593090",
        "on-secondary-container": "#caa4ff",
        "outline-variant": "#3c4a3c",
        error: "#ffb4ab"
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
        label: ["var(--font-manrope)", "system-ui", "sans-serif"]
      },
      borderRadius: {
        "3xl": "1.5rem"
      },
      boxShadow: {
        "neon-primary": "0 0 15px rgba(80, 250, 123, 0.3)",
        "neon-secondary": "0 0 15px rgba(189, 147, 249, 0.3)"
      },
    }
  },
  plugins: []
};

export default config;
