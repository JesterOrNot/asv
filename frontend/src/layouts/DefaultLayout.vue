<template>
  <div>
    <navbar :isParallax="false" />
    <div class="page-content">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Footer from "../components/layout/Footer.vue"
import Navbar from "../components/layout/Navbar.vue"

export default defineComponent({
  components: {
    Footer,
    Navbar,
  },
})
</script>
