<template>
  <Button
    :tagName="typeof $attrs.to === 'string' ? 'router-link' : 'a'"
    :color="color"
  >
    <div class="w-full mr-4">
      <slot />
    </div>
    <arrow-right />
  </Button>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ArrowRight from "../icons/ArrowRight.vue"
import Button from "./Button.vue"

export default defineComponent({
  props: {
    color: {
      type: String,
    },
  },
  components: {
    Button,
    ArrowRight,
  },
})
</script>
