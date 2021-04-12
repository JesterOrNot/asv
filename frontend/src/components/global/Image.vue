<template>
  <img :src="src" :alt="alt" v-if="!err" @error="err = true" />
  <slot v-else name="error" />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"

export default defineComponent({
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  setup(props) {
    const err = ref(false)

    watch(
      () => props.src,
      () => (err.value = false),
      {
        immediate: true,
      }
    )

    return {
      err,
    }
  },
})
</script>
