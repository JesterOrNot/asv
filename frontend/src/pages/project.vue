<template>
  <div v-if="state.project">
    <div class="bg-main">
      <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
        <Title>{{ state.project.name }}</Title>
      </div>
    </div>
  </div>
  <fullscreen-loader v-else-if="state.project === null" />
  <fullscreen-fetch-error v-else :retry="fetchData" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { useRoute } from "vue-router"
import { getProject } from "../api"
import FullscreenFetchError from "../components/global/FullscreenFetchError.vue"
import FullscreenLoader from "../components/global/FullscreenLoader.vue"
import { Title } from "../components/typography"

export default defineComponent({
  components: {
    FullscreenLoader,
    Title,
    FullscreenFetchError,
  },
  setup() {
    const state = reactive({
      project: null,
    })

    const route = useRoute()

    const fetchData = async () => {
      state.project = null

      const { data } = await getProject(
        typeof route.params.id === "string" ? route.params.id : route.params.id[0]
      )
      if (!data.success) return (state.project = false)

      // Set page title
      document.title = `ASV Group | ${data.data.project.name}`

      state.project = data.data.project
    }

    fetchData()

    return {
      state,
      fetchData,
    }
  },
})
</script>
