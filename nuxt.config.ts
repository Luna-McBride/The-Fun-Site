const { fileURLToPath } = require("url");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    buildAssetsDir: fileURLToPath(new URL('./node_modules/_nuxt/', import.meta.url))
  },
  css: ['./assets/main.css'],

  components: true,

  routeRules: {
    '/**': { isr: true }
  },

  builder: 'vite',

  experimental: {
    treeshakeClientOnly: false,
    appManifest: false
  },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },

  modules: ['@nuxt/eslint']
})