<template>
  <div :class="['container main-space', fluid && 'is-fluid']">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
