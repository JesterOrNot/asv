<template>
  <nav
    class="fixed top-0 w-full transition-all duration-300 ease-in-out px-4"
    :class="
      modelValue
        ? 'lg:px-24'
        : modelValue === false
        ? 'bg-white bg-opacity-25 lg:px-32'
        : 'opacity-0'
    "
  >
    <div
      class="w-full flex justify-between transition-all duration-300 ease-in-out"
      :class="modelValue ? 'bg-primary my-4 py-2 px-8 shadow-2xl' : ''"
    >
      <router-link to="/" class="w-full flex justify-start items-center">
        <logo class="w-24 h-16" v-model="modelValue" />
      </router-link>
      <div class="justify-end items-center w-full hidden lg:flex">
        <router-link
          to="/#o-nas"
          class="font-medium px-4 py-2 transition duration-350 ease-in-out text-white hover:bg-white hover:text-primary"
        >
          O nás
        </router-link>
        <router-link
          to="/services"
          class="font-medium px-4 py-2 transition duration-350 ease-in-out text-white hover:bg-white hover:text-primary"
        >
          Co děláme
        </router-link>
        <router-link
          to="/projects"
          class="font-medium px-4 py-2 transition duration-350 ease-in-out text-white hover:bg-white hover:text-primary"
        >
          Projekty
        </router-link>
        <router-link
          to="/contact"
          class="font-medium px-4 py-2 transition duration-350 ease-in-out text-white hover:bg-white hover:text-primary"
        >
          Kontakt
        </router-link>
      </div>
      <div class="w-full justify-end items-center flex lg:hidden">
        <button
          @click="store.mobileMenuOpen = !store.mobileMenuOpen"
          class="text-gray-100 focus:text-white transition duration-300 ease-in-out outline-none focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in-out duration-150 transform"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="store.mobileMenuOpen"
          class="absolute bottom-0 left-0 right-0 w-full px-4 py-2 lg:hidden transition-all duration-300 ease-in-out shadow-2xl"
          :class="modelValue ? 'top-24' : 'top-16'"
        >
          <div class="w-full">
            <router-link
              to="/#o-nas"
              class="w-full px-8 py-4 block transition duration-300 ease-in-out cursor-pointer"
              :class="
                modelValue
                  ? 'bg-primary text-white focus:bg-white focus:text-black'
                  : 'bg-white text-black focus:bg-primary focus:text-white'
              "
            >
              O nás
            </router-link>
            <router-link
              to="/services"
              class="w-full px-8 py-4 block transition duration-300 ease-in-out cursor-pointer"
              :class="
                modelValue
                  ? 'bg-primary text-white focus:bg-white focus:text-black'
                  : 'bg-white text-black focus:bg-primary focus:text-white'
              "
            >
              Co děláme
            </router-link>
            <router-link
              to="/projects"
              class="w-full px-8 py-4 block transition duration-300 ease-in-out cursor-pointer"
              :class="
                modelValue
                  ? 'bg-primary text-white focus:bg-white focus:text-black'
                  : 'bg-white text-black focus:bg-primary focus:text-white'
              "
            >
              Projekty
            </router-link>
            <router-link
              to="/contact"
              class="w-full px-8 py-4 block transition duration-300 ease-in-out cursor-pointer"
              :class="
                modelValue
                  ? 'bg-primary text-white focus:bg-white focus:text-black'
                  : 'bg-white text-black focus:bg-primary focus:text-white'
              "
            >
              Kontakt
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { bool } from "../../component-definitions"
import store from "../../store"
import Logo from "../global/Logo.vue"

export default defineComponent({
  components: { Logo },
  props: {
    modelValue: bool(false),
  },
  setup() {
    return {
      store,
    }
  },
})
</script>
