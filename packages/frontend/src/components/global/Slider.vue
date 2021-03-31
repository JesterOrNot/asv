<template>
  <div class="slider">
    <img :src="image.src" />
    <div class="slider--content">
      <div class="slider--feature">
        <h1>{{ image.text }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, reactive } from "vue"

export default defineComponent({
  setup() {
    const images = [
      {
        src: "/",
        text: "Hello",
      },
    ]

    const state = reactive({
      index: 0,
    })

    const image = computed(() => images[state.index])

    const startTimeout = () =>
      setTimeout(() => {
        state.index = state.index !== images.length - 1 ? state.index + 1 : 0
        startTimeout()
      }, 3000)

    const _t = startTimeout()

    onUnmounted(() => clearTimeout(_t))

    return {
      image,
      images,
    }
  },
})
</script>
