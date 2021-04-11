<template>
  <div class="_asv_spinner w-16 h-16 inline-block overflow-hidden bg-transparent">
    <div class="_asv_spinner--inner relative w-full h-full">
      <div
        class="w-16 h-16 top-12 left-12 rounded-full box-content absolute border-4"
        :class="loaderClass"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { string } from "../../component-definitions"

export default defineComponent({
  props: {
    loaderClass: string("border-primary"),
  },
})
</script>

<style scoped>
@keyframes _asv_spinner {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
._asv_spinner--inner {
  transform: translateZ(0) scale(0.75);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
._asv_spinner--inner div {
  border-top-color: transparent !important;
  animation: _asv_spinner 1s ease-in-out infinite;
}
</style>
