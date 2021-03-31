<template>
  <div :class="['columns', mobile && 'is-mobile']">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    mobile: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
