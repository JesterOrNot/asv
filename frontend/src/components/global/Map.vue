<template>
  <iframe
    title="Mapy Google"
    @load="state.mapLoaded = true"
    :style="{ height, width }"
    :src="url"
  ></iframe>
  <div :style="{ position: absolute }" v-if="!state.mapLoaded">
    <HashLoader color="#004987" size="100" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const state = reactive({
      mapLoaded: false,
    })

    return {
      state,
    }
  },
})
</script>
