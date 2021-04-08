<template>
  <vue-scroll-snap :fullscreen="true" class="duration-350 ease-in-out">
    <projects-header />
    <About />
    <projects />
    <fullscreen-footer />
  </vue-scroll-snap>
</template>

<script lang="ts">
import { defineComponent } from "vue"
// @ts-ignore
import VueScrollSnap from "vue-scroll-snap"

import ProjectsHeader from "./index-sections/ProjectsHeader.vue"
import About from "./index-sections/About.vue"
import Projects from "./index-sections/Projects.vue"
import FullscreenFooter from "../components/layout/FullscreenFooter.vue"

export default defineComponent({
  components: {
    VueScrollSnap,
    ProjectsHeader,
    About,
    Projects,
    FullscreenFooter,
  },
})
</script>
