// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-04-14',
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/icon'],
  devtools: { enabled: true },

  css: [
    '~/assets/css/normalize/normalize.css',
    '~/assets/scss/variables.scss',
    '~/assets/scss/assets.scss',
  ],

  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
      },
    ],
  },

  runtimeConfig: {
    apiUrl: process.env.NUXT_API_URL,
    apiUrlPixels: process.env.NUXT_API_URL_PIXELS,
    apiKeyPixels: process.env.NUXT_API_KEY_PIXELS,
  },
})
