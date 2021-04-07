<template>
  <div
    class="w-full flex flex-col items-center justify-center group"
    :class="
      inverted
        ? 'text-gray-300 hoevr:text-gray-200'
        : 'text-gray-700 hover:text-gray-800'
    "
  >
    <a
      :href="href"
      class="text-xl mb-4 animation duration-300 ease-in-out"
      :class="inverted ? 'hover:text-white' : 'hover:text-black'"
    >
      <slot />
    </a>
    <a
      :href="href"
      class="animation duration-300 ease-in-out hover:text-black"
      :class="inverted ? 'hover:text-white' : 'hover:text-black'"
    >
      <svg
        class="w-8 h-8 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M16 17l-4 4m0 0l-4-4m4 4V3"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { string, bool } from "../../component-definitions"

export default defineComponent({
  props: {
    href: string("#"),
    inverted: bool(false),
  },
})
</script>
