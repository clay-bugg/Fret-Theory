import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Wallpoet: true,
      Inter: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
    },
    display: "swap",
  },
});
