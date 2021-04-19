<template>
  <component :is="component" class="flex relative">
    <Image v-if="img" :src="img.src" :alt="img.alt" :class="imgClasses + img.class">
      <template #error>
        <slot name="imgError" />
      </template>
    </Image>
    <div :class="img ? textWrapperClasses : textWrapperNoImageClasses">
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "@vue/runtime-core"
import { RouterLink } from "vue-router"
import { string } from "../../component-definitions"
import { Img } from "./Card"
import Image from "../global/Image.vue"

export default defineComponent({
  name: "Card",
  components: {
    Image,
  },
  props: {
    img: {
      type: Object as PropType<Img>,
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
    const textWrapperNoImageClasses = textWrapperClasses
      .replace("opacity-0", "opacity-90")
      .replace("bg-opacity-75", "")

    const err = ref(false)

    return {
      imgClasses,
      textWrapperClasses,
      textWrapperNoImageClasses,
      component: attrs.to ? RouterLink : attrs.href ? "a" : "div",
      err,
    }
  },
})
</script>
