import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/composables/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/root.tsx",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          40: "#98A2B3",
          80: "#667085",
          60: "#475367",
          90: "#101928",
        },
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};

export default config;
