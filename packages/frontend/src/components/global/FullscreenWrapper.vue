<template>
  <div :style="styles"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {
      styles: {
        height: "100vh",
        background: "#004987",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "column",
      },
    }
  },
})
</script>
