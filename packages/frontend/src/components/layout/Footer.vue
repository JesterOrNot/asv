<template>
  <div :class="['asv_footer', index && 'index']">
    <div class="inner">
      <p>&copy; {{ currentYear }} ASV Group &ndash; Všechna práva vyhrazena.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    index: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
})
</script>
