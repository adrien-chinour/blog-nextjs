import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['serif'],
        mono: ['mono'],
      },
    },
  },
  plugins: [],
} as Config;
export default config;
