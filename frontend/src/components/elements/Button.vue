<template>
  <component
    :is="component"
    :class="
      [buttonClasses, buttonColorClasses[color] ?? buttonColorClasses['none'], $attrs.class].join(
        ''
      )
    "
  >
    <slot />
  </component>
</template>
<script lang="ts">
import { defineComponent, h } from "vue"
import { RouterLink } from "vue-router"
import { oneOf, string } from "../../component-definitions"

const buttonColorClasses: { [key: string]: string } = {
  white:
    "bg-gray-100 hover:bg-white text-gray-100 hover:text-primary border-gray-100 hover:border-white bg-opacity-30 hover:bg-opacity-100",
  transparent:
    "bg-gray-100 hover:bg-white text-gray-900 hover:text-primary border-gray-900 hover:border-primary bg-opacity-30 hover:bg-opacity-100",
  none: "",
}

export const Button = defineComponent({
  name: "Button",
  props: {
    tagName: string("button"),
    color: oneOf<string>(String as any, Object.keys(buttonColorClasses), "white"),
  },
  setup(props) {
    const buttonClasses =
      "group inline-flex justify-between items-center px-6 py-2 border-2 transition duration-300 ease-in-out shadow-2xl"

    return {
      buttonClasses,
      buttonColorClasses,
      component: props.tagName
        ? props.tagName === "router-link"
          ? RouterLink
          : props.tagName
        : "button",
    }
  },
  // h(
  //   // @ts-ignore
  //   props.tagName
  //     ? props.tagName === "router-link"
  //       ? RouterLink
  //       : props.tagName
  //     : "button",
  //   {
  //     ...attrs,
  //     class: [
  //       buttonClasses,
  //       buttonColorClasses[props.color] ?? buttonColorClasses["none"],
  //       attrs.class,
  //     ].join(" "),
  //   },
  //   slots.default?.()
  // ),
})

export default Button
</script>
