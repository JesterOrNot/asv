<template>
  <ExtendedTransition
    enter-active-class="transition-all ease-in-out duration-500"
    enter-from-class="h-0"
    enter-to-class="h-screen"
    after-enter-class="h-screen"
    leave-active-class="transition-all ease-in-out duration-700 delay-200"
    leave-from-class="h-screen"
    leave-to-class="h-0"
  >
    <div
      v-show="!animateLoaded"
      class="h-screen w-screen bg-primary absolute top-0 z-50 flex items-center justify-center"
    >
      <transition
        enter-active-class="transition-all ease-in-out duration-200 delay-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all ease-in-out duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-show="!animateLoaded" class="px-8 flex flex-col items-center justify-center">
          <logo modelValue="white" class="w-48 h-48" />
          <loader class="flex justify-center items-center" loaderClass="border-white" />
        </div>
      </transition>
    </div>
  </ExtendedTransition>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import store from "../../store"
import Logo from "./Logo.vue"
import ExtendedTransition from "./ExtendedTransition.vue"
import Loader from "./Loader.vue"

export default defineComponent({
  components: { Logo, ExtendedTransition, Loader },
  setup() {
    const animateLoaded = ref(store.loaded)
    const timeout = ref<NodeJS.Timeout | null>(null)

    watch(
      () => store.loaded,
      newVal => {
        if (timeout.value) clearTimeout(timeout.value)

        if (!newVal) return (animateLoaded.value = newVal)

        timeout.value = setTimeout(() => {
          timeout.value = null
          animateLoaded.value = newVal
        }, 320)
      }
    )

    return { store, animateLoaded }
  },
})
</script>
