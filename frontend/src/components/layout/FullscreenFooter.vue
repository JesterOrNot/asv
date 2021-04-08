<template>
  <div id="footer" class="bg-gray-800 w-full min-h-screen flex item">
    <div class="w-full max-w-7xl mx-auto flex flex-col justify-center items-center">
      <div class="mb-4">
        <logo class="w-32 md:w-36 lg:w-48 h-32 md:h-36 lg:h-48" />
      </div>

      <div class="mb-6 lg:mb-12 text-center">
        <h1 class="text-primary text-2xl md:text-4xl xl:text-6xl 2xl:text-7xl mb-4">
          Pojďte do toho s námi!
        </h1>
        <h2 class="text-white text-xl md:text-2xl xl:text-4xl 2xl:text-5xl">
          Viditelný studie té skryté praxi zde největších.
        </h2>
      </div>

      <div
        class="border-b-2 border-gray-700 w-full pb-6 lg:pb-12 mb-6 lg:mb-12 flex justify-center"
      >
        <Link color="white" to="/contact"> Kontaktujte nás </Link>
      </div>

      <div class="flex w-full justify-evenly items-center mb-6 xl:mb-0">
        <div class="flex text-white text-xl items-center">
          <svg
            class="w-8 h-8 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            ></path>
          </svg>
          <span>+420 222 222 222</span>
        </div>

        <div class="flex text-white text-xl items-center">
          <svg
            class="w-8 h-8 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <div class="flex flex-col">
            <span>Štěpánská 2071/37</span>
            <span>110 Praha 1 - Nové Město</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FullscreenWrapper from "../wrapper/FullscreenWrapper.vue"
import Link from "../elements/LinkButton.vue"
import Logo from "../global/Logo.vue"

export default defineComponent({
  components: {
    FullscreenWrapper,
    Link,
    Logo,
  },
  props: {
    address: String,
    phone: Array,
  },
})
</script>
