<template>
  <component :is="component" :class="[buttonClasses, buttonColorClass].join('')">
    <slot />
  </component>
</template>
<script lang="ts">
import { computed, defineComponent, h } from "vue"
import { RouterLink } from "vue-router"
import { bool, oneOf, string } from "../../component-definitions"

const buttonColorClasses: { [key: string]: { value: string; hover: string; disabled: string } } = {
  white: {
    value: "bg-gray-100 hover:bg-white text-gray-100 border-gray-100 bg-opacity-30",
    hover: "hover:border-white hover:bg-opacity-100 hover:text-primary",
    disabled: "border-gray-400 cursor-not-allowed",
  },
  transparent: {
    value: "bg-gray-100 hover:bg-white text-gray-900 border-gray-900 bg-opacity-30",
    hover: "hover:border-primary hover:bg-opacity-100 hover:text-primary",
    disabled: "border-gray-400 cursor-not-allowed",
  },
  none: {
    value: "",
    hover: "",
    disabled: "",
  },
}

export default defineComponent({
  name: "ASVButton",
  props: {
    tagName: string("button"),
    color: oneOf<string>(String as any, Object.keys(buttonColorClasses), "white"),
    disabled: bool(false),
  },
  setup(props) {
    const buttonClasses =
      "group inline-flex justify-between items-center px-6 py-2 border-2 transition duration-300 ease-in-out shadow-2xl focus:outline-none"

    const buttonColorClass = computed(() => {
      const colorClass = buttonColorClasses[props.color] ?? buttonColorClasses["none"]

      return [colorClass.value, props.disabled ? colorClass.disabled : colorClass.hover].join(" ")
    })

    return {
      buttonClasses,
      buttonColorClass,
      component: props.tagName
        ? props.tagName === "router-link"
          ? RouterLink
          : props.tagName
        : "button",
    }
  },
})
</script>
