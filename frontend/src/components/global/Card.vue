<template>
  <div :class="['card', isProject && 'is-project']" :style="{ height: '100%' }">
    <div class="card-image" v-if="image">
      <figure :class="['image is-16by9', isProject && 'project-image']">
        <img :src="image.src" :alt="image.alt" />
      </figure>
    </div>
    <div class="card-content" :style="{ height: '100%' }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { PersonImage } from "./Person.vue"

export default defineComponent({
  props: {
    image: {
      type: Object as PropType<PersonImage | null>,
      // return true if image is falsy because
      // image is optional
      validator: (item: PersonImage) =>
        item ? typeof item.src === "string" && typeof item.alt === "string" : true,
    },
    isProject: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
