<template>
  <fullscreen-wrapper>
    <h1 :style="{ fontSize: '3rem', color: '#fff' }">Došlo k chybě.</h1>
    <p :style="{ color: '#fff' }">
      Omlouváme se, ale nepodařilo se nám získat data. Zkuste to prosím později
    </p>

    <div class="mt-4">
      <router-link to="/" class="button is-primary is-inverted is-medium"> Jít domů </router-link>
    </div>
  </fullscreen-wrapper>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FullscreenWrapper from "./FullscreenWrapper.vue"

export default defineComponent({
  components: {
    FullscreenWrapper,
  },
})
</script>
