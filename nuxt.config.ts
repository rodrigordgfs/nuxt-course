// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": path.resolve(__dirname),
    "~": path.resolve(__dirname),
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: 'Nuxt 3 - Course'
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
