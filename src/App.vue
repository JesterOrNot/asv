<template>
  <router-view/>
</template>

<script lang="ts">
import Vue from 'vue'
import App from '@/assets/js/Application'

export default Vue.extend({
  name: "ASVGroupWeb",
  mounted() {
      const app = new App()
  }
})
</script>
