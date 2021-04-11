<template>
  <div class="relative" :style="{ height, width }">
    <iframe
      title="Mapy Google"
      @load="state.mapLoaded = true"
      :src="url"
      :style="{ height, width }"
    ></iframe>
    <div
      class="top-0 absolute w-full h-full flex justify-center items-center bg-gray-100"
      v-if="!state.mapLoaded"
    >
      <Loader />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { string } from "../../component-definitions"
import Loader from "./Loader.vue"

export default defineComponent({
  props: {
    url: string(),
    height: string("100%"),
    width: string("100%"),
  },
  components: {
    Loader,
  },
  setup() {
    const state = reactive({
      mapLoaded: false,
    })

    document.title = "ASV Group | Kontakt"

    return {
      state,
    }
  },
})
</script>
