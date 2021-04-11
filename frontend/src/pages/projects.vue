<template>
  <div class="bg-main">
    <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
      <Title>Projekty</Title>
    </div>
  </div>
  <div class="py-32 max-w-6xl mx-auto px-4 flex flex-col min-h-full" v-if="state.projects">
    <card
      v-for="(project, i) in state.projects"
      :key="i"
      :to="`/project/${project.slug}`"
      :img="{
        src: 'https://unsplash.it/1920/1080?random?' + i,
        alt: project.name,
        class: 'h-64 w-64 w-full',
      }"
      textWrapperClass="cursor-pointer"
      class="mr-8"
    >
      <card-title>{{ project.name }}</card-title>
    </card>
    <div v-if="state.projects.length === 0" class="text-center">
      <card-title class="text-primary mb-8"> Nejsou zde zatím žádné projekty. </card-title>
    </div>
    <div v-else>
      <div
        class="py-32 flex justify-center items-center max-w-6xl mx-auto"
        v-if="state.inlineLoader"
      >
        <loader />
      </div>
      <div class="py-32 flex flex-col justify-center items-center max-w-6xl mx-auto" v-else>
        <Button color="transparent" @click="nextPage">Další</Button>
      </div>
    </div>
  </div>
  <div
    class="py-32 flex justify-center items-center max-w-6xl mx-auto"
    v-else-if="state.projects === null"
  >
    <loader />
  </div>
  <div class="py-32 flex flex-col justify-center items-center max-w-6xl mx-auto" v-else>
    <card-title class="text-primary mb-8">
      Nepovedlo se načíst projekty. Zkuste to prosím později.
    </card-title>
    <Button color="transparent" @click="fetchData">Zkusit znovu</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue"
import { getProjects } from "../api"
import Card from "../components/elements/Card.vue"
import { CardTitle, CardSubtitle } from "../components/elements/Card"
import Loader from "../components/global/Loader.vue"
import { Title } from "../components/typography"
import Button from "../components/elements/Button.vue"

export default defineComponent({
  components: {
    Title,
    Card,
    Loader,
    CardTitle,
    CardSubtitle,
    Button,
  },
  setup() {
    const state = reactive({
      page: 1,
      projects: null,
      inlineLoader: false,
    })

    const fetchData = async (nullProjects = true) => {
      // If nullProjects is set to true (by default it is),
      // it sets state.projects to null and therefore resets all projects.
      // This is true on the first load.
      if (nullProjects) state.projects = null

      const { data } = await getProjects(state.page, 10)

      // When loading for the first time, state.projects = null,
      // However, when loading for the second time, some projects may already be in the state,
      // So only set it to false if the state.projects value is falsy (= false, null)
      if (!data.success) return (state.projects = state.projects ?? false)

      // Merges together both the current state.projects (or an empty object, if no projects
      // are loaded prior to the call of this function) and the results from the bacckend
      state.projects = [...(state.projects ?? []), ...data.data.projects]
    }

    const nextPage = async () => {
      // Adds one to current state.page
      state.page = state.page + 1

      // Enable inlineLoader to show the spinner
      state.inlineLoader = true

      // Wait for the results
      await fetchData(false)

      // Disable inlineLoader to hide the spinner
      state.inlineLoader = false
    }

    // Call fetchData() on load
    fetchData()

    return {
      state,
      fetchData,
      nextPage,
    }
  },
})
</script>
