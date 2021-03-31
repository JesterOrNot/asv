<template>
  <div :class="['column', size, centered && 'centered']">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    size: {
      type: String,
      default: "is-2",
    },
    centered: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
