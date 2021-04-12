import { defineComponent, h } from "@vue/runtime-core"
import { defineTypographyComponent } from "../../component-definitions"

export const Title = defineTypographyComponent("h1", "text-2xl md:text-4xl xl:text-6xl text-white")

/**
 * Wrapper around title that sets the document title
 * as well.
 */
export const PageTitle = defineComponent({
  setup(props, { slots, attrs }) {
    const slot = slots.default?.()
    if (slot && typeof slot[0]["children"] === "string")
      document.title = `ASV Group | ${slot[0]["children"]}`
    return () => h(Title, { ...attrs }, slot)
  },
})

export const Subtitle = defineTypographyComponent("h2", "text-5xl font-medium")
