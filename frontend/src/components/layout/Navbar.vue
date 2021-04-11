<template>
  <nav
    class="fixed top-0 w-full transitio-all duration-300 ease-in-out"
    :class="
      modelValue ? 'px-24' : modelValue === false ? 'bg-white bg-opacity-25 px-32' : 'opacity-0'
    "
  >
    <div
      class="w-full flex justify-between transition-all duration-300 ease-in-out shadow-2xl"
      :class="modelValue ? 'bg-primary my-4 py-2 px-8' : ''"
    >
      <router-link to="/" class="w-full">
        <logo class="w-24 h-16" v-model="modelValue" />
      </router-link>
      <div class="flex justify-end items-center w-full">
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
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { bool } from "../../component-definitions"
import Logo from "../global/Logo.vue"

export default defineComponent({
  components: { Logo },
  props: {
    modelValue: bool(false),
  },
  setup(props) {
    const state = reactive({
      active: false,
    })

    return state
  },
})
</script>
