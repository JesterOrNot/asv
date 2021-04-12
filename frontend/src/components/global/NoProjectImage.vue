<template>
  <div class="w-full min-h-48 h-full bg-gray-100 flex">
    <svg
      class="w-32 h-32 px-4 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <div>
      <p class="text-2xl" v-if="projectName">{{ projectName }}</p>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    projectName: {
      type: String,
    },
    subtitle: {
      type: String,
      default: "Projekt nemá obrázek",
    },
  },
})
</script>
