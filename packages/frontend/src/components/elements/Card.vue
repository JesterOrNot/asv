<template>
  <component :is="component" class="flex relative h-full">
    <img :src="img.src" :alt="img.alt" :class="imgClasses" />
    <div :class="textWrapperClasses">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core"
import { RouterLink } from "vue-router"
import { string } from "../../component-definitions"
import { Img } from "./Card"

export default defineComponent({
  name: "Card",
  props: {
    img: {
      type: Object as PropType<Img>,
      default: { src: "/" } as Img,
      // if img.alt isnt present, check is true because its optional
      //  same for img.class
      validator: (img: Img) =>
        typeof img.src === "string" && img.alt
          ? typeof img.alt === "string"
          : true && img
          ? img.class === "string"
          : true,
    },
    textWrapperClass: string(""),
  },
  setup(_, { attrs }) {
    const imgClasses = "h-full"
    const textWrapperClasses =
      "bg-primary absolute h-full w-full opacity-0 hover:opacity-100 bg-opacity-75 p-6 flex flex-col justify-center transition duration-300 ease-in-out"

    return {
      imgClasses,
      textWrapperClasses,
      component: attrs.to ? RouterLink : attrs.href ? "a" : "div",
    }
  },
})
</script>
