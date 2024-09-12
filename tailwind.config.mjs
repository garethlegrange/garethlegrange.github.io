import defaultTheme from "tailwindcss/defaultTheme";
import fluid, { extract } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code Variable", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), fluid],
};
