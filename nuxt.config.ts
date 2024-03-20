// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  headlessui: {
    prefix: 'Headless'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    'nuxt-svgo'
  ],
  preset: 'cloudflare_pages',
  tailwindcss: {
    viewer: false
  }
})
