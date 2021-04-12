<template>
  <transition v-bind="$attrs" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: {
    afterEnterClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return this.afterEnterClass.split(" ").filter(i => i)
    },
  },
  methods: {
    afterEnter(el) {
      this.classes.forEach(cssClass => el.classList.add(cssClass))
    },
    beforeLeave(el) {
      this.classes.forEach(cssClass => el.classList.remove(cssClass))
    },
  },
}
</script>
