<template>
  <fullscreen-wrapper id="o-nas" class="flex-col">
    <div class="flex flex-col">
      <div class="mb-8">
        <subtitle class="mb-2">O nás</subtitle>
        <p class="text-gray-900 max-w-screen-lg 2xl:text-xl">
          Skupinu ASV Group založili v roce 2014 Aleš Vobruba a Pavel Menšík,
          manažeři s dlouholetými zkušenostmi z mezinárodní realitní
          společnosti, jako realitní investiční platformu, která zahrnuje
          projekty v různých oborech a teritoriích – komerční nemovitosti,
          obchodní parky v České republice a na Slovensku, rezidenční a smíšené
          projekty v České republice, Rakousku a Chorvatsku.
        </p>
      </div>

      <column-wrapper>
        <subtitle class="mb-4">Náš team</subtitle>
        <div class="flex mb-8">
          <card
            :img="{
              src: 'https://via.placeholder.com/300x300',
              alt: 'Aleš Vobruba',
              class: 'h-56 w-56',
            }"
            textWrapperClass="cursor-pointer"
            class="mr-8"
          >
            <card-title>Aleš Vobruba</card-title>
            <card-subtitle>CEO</card-subtitle>
          </card>

          <card
            :img="{
              src: 'https://via.placeholder.com/300x300',
              alt: 'Aleš Vobruba',
              class: 'h-56 w-56',
            }"
            textWrapperClass="cursor-pointer"
          >
            <card-title>Pavel Menšík</card-title>
            <card-subtitle>Finanční ředitel</card-subtitle>
          </card>
        </div>
      </column-wrapper>
    </div>

    <arrow-section-footer href="#projects">Naše projekty</arrow-section-footer>
  </fullscreen-wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FullscreenWrapper from "../../components/wrapper/FullscreenWrapper.vue"
import ArrowSectionFooter from "../../components/layout/ArrowSectionFooter.vue"
import ColumnWrapper from "../../components/flex/ColumnWrapper"
import { Subtitle } from "../../components/typography"
import Card from "../../components/elements/Card.vue"
import { CardTitle, CardSubtitle } from "../../components/elements/Card"

export default defineComponent({
  components: {
    ArrowSectionFooter,
    FullscreenWrapper,
    ColumnWrapper,
    Subtitle,
    Card,
    CardTitle,
    CardSubtitle,
  },
})
</script>
