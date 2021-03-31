<template>
  <div v-if="settings">
    <Navbar />
    <Slider :images="settings ? settings.slides : []" />

    <About />

    <Team :team="settings ? settings.team : []" />

    <Projects />

    <ParallaxFooter
      :phone="settings ? settings.settings.phones : []"
      :address="settings ? settings.settings.address : ''"
    />
  </div>
  <FullscreenLoader v-else-if="settings === null" />

  <FullscreenFetchError v-else />
</template>

<script lang="ts">
import Slider from "../components/global/Slider.vue"
import Navbar from "../components/layout/Navbar.vue"

import ParallaxFooter from "../components/layout/ParallaxFooter.vue"
import Projects from "./index-sections/Projects.vue"
import Team from "./index-sections/Team.vue"
import About from "./index-sections/About.vue"
import FullscreenLoader from "../components/global/FullscreenLoader.vue"
import FullscreenFetchError from "../components/global/FullscreenFetchError.vue"

import Misc, { MiscGetSettingsResponse } from "../api/misc"
import { defineComponent, onMounted, reactive } from "@vue/runtime-core"

export default defineComponent({
  components: {
    Slider,
    Navbar,
    ParallaxFooter,
    Projects,
    Team,
    About,
    FullscreenLoader,
    FullscreenFetchError,
  },
  setup() {
    const state = reactive({
      settings: null as MiscGetSettingsResponse["data"] | null | false,
    })

    const fetchSettings = async () => {
      try {
        const response = await new Misc().getSettings()
        if (response.status !== 200 || !response.data.data) return //
        state.settings = response.data.data
      } catch (e) {
        state.settings = false
      }
    }

    fetchSettings()

    return state
  },
})
</script>
