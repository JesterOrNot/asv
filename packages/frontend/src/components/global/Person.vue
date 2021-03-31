<template>
  <div class="person">
    <div class="image-wrapper" v-if="image">
      <img :src="image.src" :alt="image.alt" />
    </div>
    <div class="info-wrapper">
      <h3>{{ name }}</h3>
      <span>{{ position }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export interface PersonImage {
  src: string
  alt: string
}

export default defineComponent({
  props: {
    image: {
      type: Object as PropType<PersonImage | null>,
      // return true if image is falsy because
      // image is optional
      validator: (item: PersonImage) =>
        item
          ? typeof item.src === "string" && typeof item.alt === "string"
          : true,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
    },
  },
})
</script>
