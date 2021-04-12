<template>
  <projects-header v-model="projects" />
  <About />
  <projects v-model="projects" />
  <fullscreen-footer class="mt-32" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
// @ts-ignore
import VueScrollSnap from "vue-scroll-snap"

import ProjectsHeader from "./index-sections/ProjectsHeader.vue"
import About from "./index-sections/About.vue"
import Projects from "./index-sections/Projects.vue"
import FullscreenFooter from "../components/layout/FullscreenFooter.vue"
import Navbar from "../components/layout/Navbar.vue"
import { getProjects } from "../api"
import store from "../store"

export default defineComponent({
  components: {
    VueScrollSnap,
    ProjectsHeader,
    About,
    Projects,
    FullscreenFooter,
    Navbar,
  },
  setup() {
    document.title = "ASV Group | Hlavní stránka"

    // fetching the projects here so they don't have to be fetched twice in header & projects
    const projects = ref<{ images: string[] }[]>([
      {
        images: ["https://unsplash.it/1920/1080?random"],
      },
    ])

    const fetchData = async () => {
      const { data } = await getProjects()
      if (!data.success) throw new Error() // error

      projects.value = data.data.projects.filter(p => p.images.length >= 1)

      // loaded
      store.loaded = true
    }

    fetchData()

    return {
      projects,
    }
  },
})
</script>
