<template>
  <teleport to="body">
    <fullscreen-wrapper class="z-50 absolute w-full">
      <Title>Došlo k chybě.</Title>
      <Subtitle>
        Omlouváme se, ale nepodařilo se nám získat data. Zkuste to prosím později
      </Subtitle>

      <div class="mt-4" v-if="retry">
        <Button @click="retry"> Zkusit znovu </Button>
      </div>
    </fullscreen-wrapper>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Button from "../elements/Button.vue"
import { CardTitle, CardSubtitle } from "../elements/Card"
import FullscreenWrapper from "./FullscreenWrapper.vue"

export default defineComponent({
  props: {
    retry: {
      type: Function,
    },
  },
  components: {
    FullscreenWrapper,
    Button,
    Title: CardTitle,
    Subtitle: CardSubtitle,
  },
})
</script>
