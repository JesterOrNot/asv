<template>
  <teleport to="body">
    <fullscreen-wrapper class="z-50 absolute w-full">
      <loader loaderClass="border-white" />
    </fullscreen-wrapper>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FullscreenWrapper from "./FullscreenWrapper.vue"
import Loader from "./Loader.vue"

export default defineComponent({
  components: {
    FullscreenWrapper,
    Loader,
  },
})

Loader
</script>
