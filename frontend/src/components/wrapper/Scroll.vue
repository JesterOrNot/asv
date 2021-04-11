<template>
  <navbar v-model="fixed" class="z-10" />
  <div id="_scroll" ref="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar"
import bounce from "smooth-scrollbar/plugins/overscroll"
import { defineComponent, onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import Navbar from "../layout/Navbar.vue"

export default defineComponent({
  components: { Navbar },
  setup() {
    const container = ref<HTMLDivElement | null>(null)
    const bar = ref<Scrollbar | null>(null)
    const fixed = ref(false)

    const router = useRouter()

    onMounted(() => {
      if (!container.value) return

      Scrollbar.use(bounce)

      Scrollbar.use(
        class extends ScrollbarPlugin {
          static pluginName = "ScrollEvent"

          onRender() {
            bar.value.containerEl.dispatchEvent(
              new CustomEvent("scrollbar", { detail: { scrollTop: bar.value.scrollTop, ref: bar } })
            )
            ;(bar.value.containerEl as any).__scrollTop = bar.value.scrollTop
            fixed.value =
              bar.value.scrollTop >= 100
                ? bar.value.scrollTop >= 2000 && router.currentRoute.value.path === "/"
                  ? null
                  : true
                : false
          }
        }
      )

      bar.value = Scrollbar.init(container.value, {
        damping: 0.1,
        thumbMinSize: 30,
      })

      if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        bar.value.scrollIntoView(document.getElementById(hash.length >= 1 ? hash : "top"))
      }

      bar.value.containerEl.querySelectorAll("a[href*='/#']").forEach(el => {
        el.addEventListener("click", () => {
          bar.value.scrollIntoView(document.getElementById(el.getAttribute("href").substring(2)))
        })
      })

      router.afterEach((to, from) => {
        if (to.hash) {
          const hash = to.hash.substring(1)
          return bar.value.scrollIntoView(document.getElementById(hash.length >= 1 ? hash : "top"))
        }
        return bar.value.scrollTo(0, 0)
      })
    })

    return {
      container,
      bar,
      fixed,
    }
  },
})
</script>
