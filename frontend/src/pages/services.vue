<template>
  <div class="bg-main">
    <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
      <Title>Co děláme</Title>
    </div>
  </div>
  <div class="py-32 max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-medium mb-8">Naše činnost</h2>
    <div class="w-full flex justify-between items-center">
      <router-link
        to="/projects?type=development"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("development") }}</card-subtitle>
      </router-link>
      <router-link
        to="/projects?type=investments"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("investments") }}</card-subtitle>
      </router-link>
      <router-link
        to="/projects?type=asset_management"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("asset_management") }}</card-subtitle>
      </router-link>
      <router-link
        to="/projects?type=advisory"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("advisory") }}</card-subtitle>
      </router-link>
    </div>
    <h2 class="text-3xl font-medium my-8">Typy nemovitostí</h2>
    <div class="w-full flex justify-between items-center">
      <router-link
        to="/projects?type=mixed"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("mixed") }}</card-subtitle>
      </router-link>
      <router-link
        to="/projects?type=office"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("office") }}</card-subtitle>
      </router-link>
      <router-link
        to="/projects?type=residential"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("residential") }}</card-subtitle>
      </router-link>
      <router-link
        to="/projects?type=retail"
        class="w-full h-32 bg-primary mr-4 bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out flex items-center justify-center text-center"
      >
        <card-subtitle>{{ getProjectTypeDisplayText("retail") }}</card-subtitle>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"
import { getProjectTypeDisplayText } from "../api"
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
    return {
      getProjectTypeDisplayText,
    }
  },
})
</script>
