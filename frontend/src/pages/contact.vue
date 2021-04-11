<template>
  <div class="bg-main">
    <div class="py-32 bg-gray-700 bg-opacity-30 w-full h-full flex justify-center items-center">
      <Title>Kontakt</Title>
    </div>
  </div>
  <div class="py-32 max-w-6xl mx-auto px-4 flex justify-between items-center min-h-full">
    <div class="w-full h-full">
      <div class="flex items-center mb-6">
        <svg
          class="w-8 h-8 text-primary mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
        <span class="font-medium text-primary">+420 222 222 222</span>
      </div>
      <div class="flex items-center mb-6">
        <svg
          class="w-8 h-8 text-primary mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <span class="font-medium text-primary">av@asvgroup.cz</span>
      </div>
      <div class="flex items-center mb-6">
        <svg
          class="w-8 h-8 text-primary mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
        <span class="font-medium text-primary">pm@asvgroup.cz</span>
      </div>
      <div class="flex items-center">
        <svg
          class="w-8 h-8 text-primary mr-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          ></path>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
        </svg>
        <span class="font-medium text-primary">
          Štěpánská 2071/37
          <br />
          110 00 Praha 1 - Nové Město
        </span>
      </div>
    </div>
    <div class="w-full h-full flex justify-end">
      <Map
        url="https://maps.google.com/maps?q=%C5%A1t%C4%9Bp%C3%A1nsk%C3%A1%202071%2F37&t=&z=19&ie=UTF8&iwloc=&output=embed"
        height="300px"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Title } from "../components/typography"
import Map from "../components/global/Map.vue"

export default defineComponent({
  components: {
    Title,
    Map,
  },
  setup() {},
})
</script>
