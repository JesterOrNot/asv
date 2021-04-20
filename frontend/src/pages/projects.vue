<template>
  <div class="bg-main">
    <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
      <PageTitle>Projekty</PageTitle>
    </div>
  </div>
  <div class="mt-32 mb-12 max-w-6xl mx-auto px-8">
    <project-types :linkToEmpty="true" v-model="type" />
  </div>
  <div v-if="state.projects">
    <div
      class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 my-8 w-full justify-center md:justify-between items-center md:items-start flex-col md:flex-row max-w-6xl mx-auto px-8"
    >
      <card
        v-for="(project, i) in state.projects"
        :key="i"
        :to="`/project/${project.slug}`"
        :img="{
          src: project.images[0],
          alt: project.name,
          class: ' h-48 w-full',
        }"
        textWrapperClass="cursor-pointer"
        class="mb-8 w-full h-48"
      >
        <template #imgError>
          <no-project-image
            :projectName="project.name"
            class="flex-row-reverse items-center justify-start"
          />
        </template>
        <card-title>{{ project.name }}</card-title>
      </card>
    </div>
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
      <div
        class="py-32 flex flex-col justify-center items-center max-w-6xl mx-auto"
        v-else-if="!state.end"
      >
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
import { defineComponent, onMounted, reactive, ref, watch } from "vue"
import { getProjects } from "../api"
import Card from "../components/elements/Card.vue"
import { CardTitle, CardSubtitle } from "../components/elements/Card"
import Loader from "../components/global/Loader.vue"
import { PageTitle } from "../components/typography"
import Button from "../components/elements/Button.vue"
import { useRoute } from "vue-router"
import NoProjectImage from "../components/global/NoProjectImage.vue"
import ProjectTypes from "./services-sections/ProjectTypes.vue"
import store from "../store"

export default defineComponent({
  components: {
    PageTitle,
    Card,
    Loader,
    CardTitle,
    CardSubtitle,
    Button,
    NoProjectImage,
    ProjectTypes,
  },
  setup() {
    const state = reactive({
      page: 1,
      projects: null,
      inlineLoader: false,
      end: false,
    })

    const type = ref<string | null>(null)

    const route = useRoute()

    type.value = route.query.type
      ? typeof route.query.type === "string"
        ? route.query.type
        : route.query.type[0]
      : null

    const fetchData = async (nullProjects = true) => {
      // If nullProjects is set to true (by default it is),
      // it sets state.projects to null and therefore resets all projects.
      // This is true on the first load.
      if (nullProjects) state.projects = null

      type.value = route.query.type
        ? typeof route.query.type === "string"
          ? route.query.type
          : route.query.type[0]
        : null

      const { data } = await getProjects(state.page, 10, type.value)

      // When loading for the first time, state.projects = null,
      // However, when loading for the second time, some projects may already be in the state,
      // So only set it to false if the state.projects value is falsy (= false, null)
      if (!data.success) return (state.projects = state.projects ?? false)

      // Merges together both the current state.projects (or an empty object, if no projects
      // are loaded prior to the call of this function) and the results from the bacckend
      state.projects = [...(state.projects ?? []), ...data.data.projects]

      // If there's less than 10 results, there will be no more results,
      // therefore this is the last page
      if (data.data.projects.length < 10) state.end = true

      store.loaded = true
    }

    const nextPage = async () => {
      const prevLength = state.projects.length

      // Adds one to current state.page
      state.page = state.page + 1

      // Enable inlineLoader to show the spinner
      state.inlineLoader = true

      // Wait for the results
      await fetchData(false)

      if (prevLength === state.projects.length) state.end = true

      // Disable inlineLoader to hide the spinner
      state.inlineLoader = false
    }

    // Call fetchData() on load
    fetchData()

    watch(
      () => route.query.type,
      () => {
        store.loaded = false
        state.page = 1
        state.projects = null
        state.end = false

        fetchData()
      }
    )

    return {
      state,
      fetchData,
      nextPage,
      type,
    }
  },
})
</script>
