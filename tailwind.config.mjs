import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        display: ["Hubot Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Server Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
