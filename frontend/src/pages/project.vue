<template>
  <div v-if="state.project">
    <div class="relative py-32">
      <div
        :style="`background: url(${state.project.images[0]}) no-repeat fixed;background-size: cover;background-position: center;filter: blur(3px)`"
        class="w-full h-full absolute top-0"
      ></div>

      <div
        class="absolute w-full h-full top-0 bg-gray-700 bg-opacity-30 flex justify-center items-center"
      >
        <PageTitle>{{ state.project.name }}</PageTitle>
      </div>
    </div>
    <div
      class="py-32 max-w-6xl mx-auto px-4 flex justify-between items-center min-h-full"
      v-if="state.project"
    >
      <div class="w-full">
        <div class="mb-6">
          <p
            class="pr-8 block"
            v-for="(content, i) in state.project.description.split('\\n')"
            :key="i"
          >
            <component :is="content === '%sp%' ? 'br' : 'span'">
              {{ content === "%sp%" ? "" : content }}
            </component>
          </p>
        </div>
        <div :class="state.project.website && 'mb-6'" v-if="state.project.address">
          <p class="text-black font-medium mb-2">Adresa</p>
          <p class="pr-8" v-for="(line, i) in state.project.address.split('\\n')" :key="i">
            {{ line }}
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
        <Image
          :src="state.project.images[0]"
          :alt="state.project.name"
          v-else-if="state.project.images.length === 1"
        >
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
import { PageTitle } from "../components/typography"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import remark from "remark"
import html from "remark-html"

import "vue3-carousel/dist/carousel.css"
import Image from "../components/global/Image.vue"
import NoProjectImage from "../components/global/NoProjectImage.vue"
import store from "../store"

export default defineComponent({
  components: {
    FullscreenLoader,
    PageTitle,
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

      state.project = data.data.project
      store.loaded = true
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
