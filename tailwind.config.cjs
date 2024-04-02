import { StaticShadows } from "open-props/src/shadows"

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        humane: ["HumaneBlack"],
        humaneThin: ["HumaneThin"],
        humaneLight: ["HumaneLight"],
      },
    },
    boxShadow: {
      xs: StaticShadows["--shadow-1"],
      sm: StaticShadows["--shadow-2"],
      md: StaticShadows["--shadow-3"],
      lg: StaticShadows["--shadow-4"],
      xl: StaticShadows["--shadow-5"],
      "2xl": StaticShadows["--shadow-6"],
    },
  },
  plugins: [],
}
