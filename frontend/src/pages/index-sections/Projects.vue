<template>
  <fullscreen-wrapper id="projects">
    <div>
      <column-wrapper class="w-full">
        <subtitle>Projekty</subtitle>

        <div class="flex my-8">
          <card
            :img="{
              src: 'https://via.placeholder.com/300x200',
              alt: 'Projekt D',
            }"
            to="/project/d"
            class="mr-8"
          >
            <card-title>Projekt B</card-title>
          </card>
          <card
            :img="{
              src: 'https://via.placeholder.com/300x200',
              alt: 'Projekt B',
            }"
            to="/project/b"
            class="mr-8"
          >
            <card-title>Projekt D</card-title>
          </card>

          <card
            :img="{
              src: 'https://via.placeholder.com/300x200',
              alt: 'Projekt F',
            }"
            to="/project/f"
          >
            <card-title>Projekt F</card-title>
          </card>
        </div>

        <div class="flex justify-end">
          <Link color="transparent" to="/projects"> Všechny projekty </Link>
        </div>
      </column-wrapper>
    </div>
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
