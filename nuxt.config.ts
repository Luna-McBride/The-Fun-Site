// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['./assets/main.css'],
  components: true,
  routeRules: {
    '/**': { isr: true }
  },
  vite: {
    vue: {
      customElement: true
    },
    vueJsx: {
      mergeProps: true
    }
  },
  builder: 'webpack',
  experimental: {
    treeshakeClientOnly: false
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },
  vue: {
    propsDestructure: true
  }
})
