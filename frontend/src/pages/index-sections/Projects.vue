<template>
  <fullscreen-wrapper id="projects">
    <column-wrapper class="w-full items-center md:items-start">
      <subtitle class="mb-8">Projekty</subtitle>

      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 my-8 w-full justify-center md:justify-between items-center md:items-start flex-col md:flex-row"
      >
        <card
          v-for="(project, i) in modelValue.slice(0, 8)"
          :key="i"
          :img="{
            src: project.images[0],
            alt: project.name,
          }"
          :to="`/project/${project.slug}`"
          class="w-64 mb-8"
        >
          <card-title>{{ project.name }}</card-title>
        </card>
      </div>

      <div class="flex md:justify-end">
        <Link color="transparent" to="/projects"> Všechny projekty </Link>
      </div>
    </column-wrapper>
  </fullscreen-wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { Subtitle } from "../../components/typography"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import FullscreenWrapper from "../../components/wrapper/FullscreenWrapper.vue"
import Card from "../../components/elements/Card.vue"
import { CardTitle } from "../../components/elements/Card"
import Link from "../../components/elements/LinkButton.vue"

export default defineComponent({
  props: {
    modelValue: {
      type: Array,
    },
  },
  components: {
    FullscreenWrapper,
    Subtitle,
    ColumnWrapper,
    Card,
    CardTitle,
    Link,
  },
})
</script>
