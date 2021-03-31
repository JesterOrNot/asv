<template>
  <div class="wdwd-item">
    <img :src="image" :alt="title" />
    <div class="bg">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
})
</script>
