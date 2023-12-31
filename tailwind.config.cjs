const starlightPlugin = require("@astrojs/starlight-tailwind");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.indigo,
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        gray: colors.zinc,
      },
      fontFamily: {
        sans: "Averia Serif Libre, sans-serif",
        serif: "Averia Serif Libre, serif",
      },
    },
  },
  plugins: [starlightPlugin()],
};
