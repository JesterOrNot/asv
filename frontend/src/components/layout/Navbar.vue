<template>
  <nav
    :class="['navbar asv_navbar', fixed && 'fixed']"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-fluid">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <logo :color="fixed ? 'white' : 'blue'" width="150" height="56" />
        </router-link>

        <a :class="['navbar-burger burger', active && 'is-active']" @click="active = !active">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div :class="['navbar-menu', active && 'is-active']">
        <div class="navbar-end">
          <router-link class="navbar-item" to="/"> Domov </router-link>
          <router-link to="/projects" class="navbar-item"> Projekty </router-link>
          <router-link to="/about" class="navbar-item"> Co děláme </router-link>
          <router-link to="/contact" class="navbar-item"> Kontakt </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { debounce } from "lodash"
import { defineComponent, onMounted, onUnmounted, reactive } from "vue"
import Logo from "../global/Logo.vue"

export default defineComponent({
  components: { Logo },
  setup() {
    const state = reactive({
      fixed: false,
      active: false,
    })

    const handleScroll = debounce(() => (state.fixed = window.scrollY > 100))

    onMounted(() => window.addEventListener("scroll", handleScroll))

    onUnmounted(() => window.removeEventListener("scroll", handleScroll))

    return state
  },
})
</script>
