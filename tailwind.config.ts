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
        primary: {
          DEFAULT: "#FFCC05",
          50: "#FFF1BD",
          100: "#FFEDA8",
          200: "#FFE57F",
          300: "#FFDD57",
          400: "#FFD42E",
          500: "#FFCC05",
          600: "#CCA200",
          700: "#947600",
          800: "#5C4900",
          900: "#241C00",
          950: "#080600",
        },
        secondary: {
          DEFAULT: "#386ABB",
          50: "#BFD0EC",
          100: "#AFC4E7",
          200: "#90ADDE",
          300: "#7096D4",
          400: "#517FCB",
          500: "#386ABB",
          600: "#2B5290",
          700: "#1E3965",
          800: "#112139",
          900: "#04080E",
          950: "#000000",
        },
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};

export default config;
