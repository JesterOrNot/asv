<template>
  <fullscreen-wrapper id="o-nas" class="flex-col">
    <div class="flex flex-col w-full items-center md:items-start">
      <subtitle class="mb-2">O nás</subtitle>
      <p class="text-gray-900 max-w-screen-lg 2xl:text-xl">
        Investiční skupinu ASV založili v roce 2014 Aleš Vobruba a Pavel Menšík, manažeři s
        dlouholetými zkušenostmi z mezinárodních realitních společností, jako realitní investiční
        platformu, která zahrnuje projekty v oborech rezidenčního developmentu, komerčního
        developmentu a investičních aktiv, s působností v regionu sřední Evropy. Někeré projekty
        jsou realizovány v rámci joint-venture partnerství s dalšími investory.
      </p>
    </div>
  </fullscreen-wrapper>
  <fullscreen-wrapper id="nas-team">
    <column-wrapper class="items-center md:items-start w-full">
      <subtitle class="mb-4">Náš team</subtitle>
      <div class="flex mb-8 flex-col md:flex-row items-center md:items-start">
        <card
          textWrapperClass="cursor-pointer"
          class="md:mr-8 mb-8 md:mb-0 w-64 h-64"
        >
          <card-title>Aleš Vobruba</card-title>
        </card>

        <card
          textWrapperClass="cursor-pointer"
          class="w-64 h-64"
        >
          <card-title>Pavel Menšík</card-title>
        </card>
      </div>
    </column-wrapper>
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
