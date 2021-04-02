<template>
  <nav class="w-full py-1 hidden">
    <div
      class="mx-auto max-w-2xl lg:max-w-4xl xl:max-w-5xl flex justify-center md:justify-between items-center"
    >
      <div class="md:px-2">
        <logo class="w-16 h-16" />
      </div>
      <div class="hidden md:flex">
        <div class="mr-4">
          <a href="#" class="px-2 py-2">O nás</a>
        </div>
        <div class="mr-4">
          <a href="#" class="px-2 py-2">Projekty</a>
        </div>
        <div class="mr-4">
          <a href="#" class="px-2 py-2">Co děláme</a>
        </div>
        <div class="mr-4">
          <a href="#" class="px-2 py-2">Kontakt</a>
        </div>
      </div>
    </div>
  </nav>
  <vue-scroll-snap :fullscreen="true" class="duration-350 ease-in-out">
    <div
      id="top"
      class="relative w-full h-screen mx-auto flex justify-center items-center px-6 py-8 item"
    >
      <div class="relative w-full h-full bg-main rounded-3xl">
        <!-- <img src="../assets/img/0.png" class="rounded-3xl opacity-100" /> -->
        <div
          class="absolute w-full h-full top-0 px-32 flex flex-col justify-between bg-gray-700 rounded-3xl bg-opacity-30"
        >
          <div class="h-full"></div>

          <div class="h-full flex items-center">
            <div>
              <h1 class="text-2xl md:text-4xl xl:text-6xl text-white">
                Projekt A
              </h1>
              <div class="mt-6">
                <a
                  href="#"
                  class="group inline-flex justify-between items-center px-6 py-2 border-2 text-gray-100 hover:text-primary bg-gray-100 bg-opacity-30 hover:bg-white hover:bg-opacity-100 transition duration-300 ease-in-out shadow-2xl"
                >
                  <div class="w-full mr-4">O projektu</div>
                  <svg
                    class="w-8 h-8 transform-gpu -translate-x-3 group-hover:translate-x-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="h-full flex flex-col items-center justify-center group text-gray-300 hover:text-gray-200"
          >
            <a
              href="#o-nas"
              class="text-xl mb-4 animation duration-300 ease-in-out hover:text-white"
            >
              Zjistěte více o ASV Group
            </a>
            <a
              href="#o-nas"
              class="animation duration-300 ease-in-out hover:text-white"
            >
              <svg
                class="w-8 h-8 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      id="o-nas"
      class="py-20 w-full mx-auto max-w-7xl flex justify-center items-center item"
    >
      <div>
        <div class="w-full text-center mb-10">
          <h2 class="text-5xl font-medium mb-8">O nás</h2>
          <p
            class="text-black font-serif font-medium max-w-screen-lg mx-auto text-xl text-center md:text-left"
          >
            Skupinu ASV Group založili v roce 2014 Aleš Vobruba a Pavel Menšík,
            manažeři s dlouholetými zkušenostmi z mezinárodní realitní
            společnosti, jako realitní investiční platformu, která zahrnuje
            projekty v různých oborech a teritoriích – komerční nemovitosti,
            obchodní parky v České republice a na Slovensku, rezidenční a
            smíšené projekty v České republice, Rakousku a Chorvatsku.
          </p>
        </div>

        <div class="w-full text-center flex flex-col items-center">
          <h2 class="text-5xl font-medium mb-8">Náš team</h2>
          <div class="flex">
            <div class="flex flex-col mr-8 h-full">
              <img
                src="https://via.placeholder.com/150x250"
                class="rounded-t-3xl h-full"
                alt="Aleš Vobruba"
              />
              <div class="bg-primary rounded-b-3xl p-6 text-center">
                <p class="text-xl text-white font-medium">Aleš Vobruba</p>
                <p class="text-gray-100">CEO</p>
              </div>
            </div>

            <div class="flex flex-col h-full">
              <img
                src="https://via.placeholder.com/150x250"
                class="rounded-t-3xl h-full"
                alt="Aleš Vobruba"
              />
              <div class="bg-primary rounded-b-3xl p-6 text-center">
                <p class="text-xl text-white font-medium">Pavel Menšík</p>
                <p class="text-gray-100">Finanční ředitel</p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-20 h-full flex flex-col items-center justify-center group text-gray-700 hover:text-gray-800"
        >
          <a
            href="#projekty"
            class="text-xl mb-4 animation duration-300 ease-in-out hover:text-black"
          >
            Naše projekty
          </a>
          <a
            href="#projekty"
            class="animation duration-300 ease-in-out hover:text-black"
          >
            <svg
              class="w-8 h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div
      id="projekty"
      class="pb-20 w-full mx-auto max-w-7xl flex justify-center items-center item"
    >
      <div>
        <div class="w-full text-center flex flex-col items-center">
          <h2 class="text-5xl font-medium mb-8">Projekty</h2>
          <div class="flex mb-8">
            <div class="flex relative h-full mr-8">
              <img
                src="https://via.placeholder.com/300x200"
                class="rounded-3xl h-full"
                alt="Aleš Vobruba"
              />
              <div
                class="bg-primary absolute h-full w-full bg-opacity-5 hover:bg-opacity-30 rounded-3xl p-6 flex justify-center items-center transition duration-300 ease-in-out"
              >
                <p class="text-3xl text-white font-medium">Projekt B</p>
              </div>
            </div>

            <div class="flex relative h-full mr-8">
              <img
                src="https://via.placeholder.com/300x200"
                class="rounded-3xl h-full"
                alt="Aleš Vobruba"
              />
              <div
                class="bg-primary absolute h-full w-full bg-opacity-5 hover:bg-opacity-30 rounded-3xl p-6 flex justify-center items-center transition duration-300 ease-in-out"
              >
                <p class="text-3xl text-white font-medium">Projekt B</p>
              </div>
            </div>

            <div class="flex relative h-full">
              <img
                src="https://via.placeholder.com/300x200"
                class="rounded-3xl h-full"
                alt="Aleš Vobruba"
              />
              <div
                class="bg-primary absolute h-full w-full bg-opacity-5 hover:bg-opacity-30 rounded-3xl p-6 flex justify-center items-center transition duration-300 ease-in-out"
              >
                <p class="text-3xl text-white font-medium">Projekt B</p>
              </div>
            </div>
          </div>

          <div>
            <a
              href="#"
              class="group inline-flex justify-between items-center px-6 py-2 border-2 border-gray-900 text-gray-900 hover:text-primary hover:border-primary bg-gray-100 bg-opacity-30 hover:bg-white hover:bg-opacity-100 transition duration-300 ease-in-out shadow-2xl"
            >
              <div class="w-full mr-4">Všechny projekty</div>
              <svg
                class="w-8 h-8 transform-gpu -translate-x-3 group-hover:translate-x-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="bg-gray-800 w-full min-h-screen flex item">
      <div
        class="w-full max-w-7xl mx-auto flex flex-col justify-center items-center"
      >
        <div class="mb-4">
          <logo class="w-32 md:w-36 lg:w-48 h-32 md:h-36 lg:h-48" />
        </div>

        <div class="mb-6 lg:mb-12 text-center">
          <h1
            class="text-primary text-2xl md:text-4xl xl:text-6xl 2xl:text-7xl mb-4"
          >
            Pojďte do toho s námi!
          </h1>
          <h2 class="text-white text-xl md:text-2xl xl:text-4xl 2xl:text-5xl">
            Viditelný studie té skryté praxi zde největších.
          </h2>
        </div>

        <div
          class="border-b-2 border-gray-700 w-full pb-6 lg:pb-12 mb-6 lg:mb-12 flex justify-center"
        >
          <a
            href="#"
            class="group inline-flex justify-between items-center px-6 py-2 border-2 border-white text-gray-100 hover:text-primary bg-gray-100 bg-opacity-30 hover:bg-white hover:bg-opacity-100 transition duration-300 ease-in-out shadow-2xl"
          >
            <div class="w-full mr-4">Kontaktujte nás</div>
            <svg
              class="w-8 h-8 transform-gpu -translate-x-3 group-hover:translate-x-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
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
  </vue-scroll-snap>
</template>

<script lang="ts">
import Slider from "../components/global/Slider.vue"
import Navbar from "../components/layout/Navbar.vue"

import ParallaxFooter from "../components/layout/ParallaxFooter.vue"
import Projects from "./index-sections/Projects.vue"
import Team from "./index-sections/Team.vue"
import About from "./index-sections/About.vue"
import FullscreenLoader from "../components/global/FullscreenLoader.vue"
import FullscreenFetchError from "../components/global/FullscreenFetchError.vue"

import Misc, { MiscGetSettingsResponse } from "../api/misc"
import { defineComponent, onMounted, reactive, ref } from "@vue/runtime-core"
import Logo from "../components/global/Logo.vue"

// @ts-ignore
import VueScrollSnap from "vue-scroll-snap"

export default defineComponent({
  components: {
    Slider,
    Navbar,
    ParallaxFooter,
    Projects,
    Team,
    About,
    FullscreenLoader,
    FullscreenFetchError,
    Logo,
    VueScrollSnap,
  },
  setup() {
    const state = reactive({
      settings: null as MiscGetSettingsResponse["data"] | null | false,
    })

    return state
  },
})
</script>
