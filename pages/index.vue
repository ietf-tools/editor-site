<template>
  <div class="bg-gray-950 bg-gradient-to-b from-[#32000D] to-gray-950">
    <div class="relative isolate pt-14">
      <div class="py-10 lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <div class="mt-5"><img src="~/assets/logo-text-dark.png" alt="DraftForge" /></div>
            <h1 class="text-4xl font-bold tracking-tight text-white mt-5 sm:text-3xl">Write, Review, Refine and Submit Internet-Drafts</h1>
            <p class="mt-6 text-md leading-8 text-gray-300">DraftForge is under active development. A beta release will be available in the coming months.</p>
            <div class="mt-10 flex flex-col justify-center items-center gap-6">
              <a href="https://github.com/ietf-tools/editor/releases/latest" class="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Download Alpha Release</a>
              <div class="flex justify-center items-center gap-x-6">
                <a href="https://github.com/ietf-tools/editor" class="text-sm font-semibold leading-6 text-blue-200">GitHub</a>
                <a href="https://github.com/ietf-tools/editor/issues" class="text-sm font-semibold leading-6 text-blue-200">Report Bug</a>
                <a href="https://github.com/ietf-tools/editor/blob/main/LICENSE" class="text-sm font-semibold leading-6 text-blue-200">License</a>
              </div>
            </div>
            <div class="flex justify-center mt-12">
              <a href="https://www.ietf.org"><IetfLogo :font-controlled="false" class="h-[60px]" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IetfLogo from '~/assets/ietf-logo-white.svg'
</script>
