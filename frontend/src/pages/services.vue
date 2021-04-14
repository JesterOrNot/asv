<template>
  <div class="bg-main">
    <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
      <PageTitle>Co děláme</PageTitle>
    </div>
  </div>
  <div class="py-32 max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-medium mb-8">Naše činnost</h2>
    <div class="w-full flex flex-col md:flex-row justify-between items-center">
      <div
        class="cursor-pointer w-full h-32 bg-primary mb-8 md:mr-4 md:mb-0 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getServiceDisplayText("development") }}</card-subtitle>
      </div>
      <div
        class="cursor-pointer w-full h-32 bg-primary mb-8 md:mr-4 md:mb-0 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getServiceDisplayText("investments") }}</card-subtitle>
      </div>
      <div
        class="cursor-pointer w-full h-32 bg-primary mb-8 md:mr-4 md:mb-0 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getServiceDisplayText("asset_management") }}</card-subtitle>
      </div>
      <div
        class="cursor-pointer w-full h-32 bg-primary mb-8 md:mr-4 md:mb-0 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getServiceDisplayText("advisory") }}</card-subtitle>
      </div>
    </div>
    <h2 class="text-3xl font-medium my-8">Naše projekty</h2>
    <project-types />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import Card from "../components/elements/Card.vue"
import { CardTitle, CardSubtitle } from "../components/elements/Card"
import Loader from "../components/global/Loader.vue"
import { PageTitle } from "../components/typography"
import Button from "../components/elements/Button.vue"
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
    ProjectTypes,
  },
  setup() {
    const SERVICES = {
      investments: {
        cs: "Rezidenční development",
        en: "Investments & Acquisitions",
      },
      asset_management: {
        cs: "Asset Management a pronájmy",
        en: "Asset Management & Leasing",
      },
      advisory: {
        cs: "Poradenství a Financování",
        en: "Advisory & Financing",
      },
      development: {
        cs: "Komerční development",
        en: "Development & Construction Management",
      },
    }

    const getServiceDisplayText = (type: keyof typeof SERVICES) => {
      const lang = "cs" // TODO: change

      const translation = SERVICES[type]

      // en is fallback
      return typeof translation === "string" ? translation : translation[lang] ?? translation["en"]
    }

    onMounted(() => {
      store.loaded = true
    })

    return {
      getServiceDisplayText,
    }
  },
})
</script>
