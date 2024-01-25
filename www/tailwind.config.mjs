import starlightPlugin from "@astrojs/starlight-tailwind";
import icon from "astro-icon";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [starlightPlugin(), icon()],
};
