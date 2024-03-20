<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  link: [
    { rel: 'preconnect', href: 'https://rsms.me' },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
  ],
  bodyAttrs: {
    class: 'h-full bg-gray-950'
  },
  htmlAttrs: {
    class: 'h-full'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - IETF DraftForge` : 'IETF DraftForge'
  }
})
</script>

<style lang="scss">
:root { font-family: 'Inter', sans-serif; }
@supports (font-variation-settings: normal) {
  :root { font-family: 'Inter var', sans-serif; }
}
</style>