<template>
  <projects-header />
  <About />
  <projects />
  <fullscreen-footer class="mt-32" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
// @ts-ignore
import VueScrollSnap from "vue-scroll-snap"

import ProjectsHeader from "./index-sections/ProjectsHeader.vue"
import About from "./index-sections/About.vue"
import Projects from "./index-sections/Projects.vue"
import FullscreenFooter from "../components/layout/FullscreenFooter.vue"
import Navbar from "../components/layout/Navbar.vue"

export default defineComponent({
  components: {
    VueScrollSnap,
    ProjectsHeader,
    About,
    Projects,
    FullscreenFooter,
    Navbar,
  },
})
</script>
