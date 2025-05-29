export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Inter": [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
  ],
});
