<template>
  <div v-if="state.project">
    <div class="bg-main">
      <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
        <Title>{{ state.project.name }}</Title>
      </div>
    </div>
    <div
      class="py-32 max-w-6xl mx-auto px-4 flex justify-between items-center min-h-full"
      v-if="state.project"
    >
      <div class="w-full">
        <div class="mb-6">
          <p class="pr-8 block" v-html="parseMd(state.project.description)"></p>
        </div>
        <div :class="state.project.website && 'mb-6'">
          <p class="text-black font-medium mb-2">Typ projektu</p>
          <p class="pr-8" v-for="(type, i) in state.project.types" :key="i">
            {{ getProjectTypeDisplayText(type) }}
          </p>
        </div>
        <div v-if="state.project.website">
          <p class="text-black font-medium mb-2">Webová stránka</p>
          <a
            :href="`${!state.project.website.startsWith('http') ? '//' : ''}${
              state.project.website
            }`"
            class="text-primary border-b border-primary inline-flex"
          >
            {{ state.project.website }}
          </a>
        </div>
      </div>
      <div class="w-full">
        <Carousel :wrapAround="true" v-if="state.project.images.length > 1">
          <Slide v-for="(image, i) in state.project.images" :key="i">
            <div class="carousel__item w-full h-full">
              <Image :src="image" :alt="state.project.name">
                <template #error>
                  <no-project-image
                    :projectName="state.project.name"
                    class="w-full h-full items-center justify-center"
                    subtitle="Obrázek se nepovedlo načíst"
                  />
                </template>
              </Image>
            </div>
          </Slide>

          <template #addons="{ slidesCount }">
            <navigation v-if="slidesCount > 1" />
          </template>
        </Carousel>
        <Image :src="image" :alt="state.project.name" v-else-if="state.project.images.length === 1">
          <template #error>
            <no-project-image
              :projectName="state.project.name"
              class="w-full h-full items-center justify-center"
              subtitle="Obrázek se nepovedlo načíst"
            />
          </template>
        </Image>
        <no-project-image v-else />
      </div>
    </div>
  </div>
  <fullscreen-loader v-else-if="state.project === null" />
  <fullscreen-fetch-error v-else :retry="fetchData" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { useRoute } from "vue-router"
import { getProject, getProjectTypeDisplayText } from "../api"
import FullscreenFetchError from "../components/global/FullscreenFetchError.vue"
import FullscreenLoader from "../components/global/FullscreenLoader.vue"
import { Title } from "../components/typography"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import remark from "remark"
import html from "remark-html"

import "vue3-carousel/dist/carousel.css"
import Image from "../components/global/Image.vue"
import NoProjectImage from "../components/global/NoProjectImage.vue"

export default defineComponent({
  components: {
    FullscreenLoader,
    Title,
    FullscreenFetchError,
    Carousel,
    Slide,
    Navigation,
    NoProjectImage,
    Image,
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

    const parseMd = (str: string) => remark().use(html, { sanitize: true }).processSync(str)

    fetchData()

    return {
      state,
      fetchData,
      getProjectTypeDisplayText,
      parseMd,
    }
  },
})
</script>

<style lang="postcss">
.carousel__pagination-button {
  @apply bg-primary;
}

.carousel__pagination-button--active {
  @apply bg-primary;
}

.carousel__prev,
.carousel__next {
  @apply rounded-none bg-primary transition duration-300 ease-in-out bg-opacity-75;
}

.carousel__prev:hover,
.carousel__next:hover {
  @apply bg-opacity-100;
}
</style>
