<template>
  <div id="top" class="item w-screen h-screen mx-auto flex flex-col justify-between relative">
    <div class="w-screen h-screen absolute top-0 bg-gray-700 bg-opacity-40 z-20"></div>
    <img
      class="w-screen h-screen absolute top-0 z-10"
      style="filter: blur(3px)"
      :src="modelValue[src]['images'][0]"
    />

    <!-- push item -->
    <div class="h-full"></div>

    <div class="h-full flex items-center px-32 z-20">
      <div>
        <Title>{{ modelValue[src]["name"] }}</Title>
        <div class="mt-6">
          <link-button :to="`/project/${modelValue[src]['slug']}`">O projektu</link-button>
        </div>
      </div>
    </div>

    <arrow-section-footer class="h-full pb-8 z-20" href="/#o-nas" :inverted="true">
      Zjistěte více o ASV Group
    </arrow-section-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"
import { Title } from "../../components/typography"
import LinkButton from "../../components/elements/LinkButton.vue"
import ArrowSectionFooter from "../../components/layout/ArrowSectionFooter.vue"
import Logo from "../../components/global/Logo.vue"
import { getProjects, ProjectResDto } from "../../api"

export default defineComponent({
  components: {
    Title,
    LinkButton,
    ArrowSectionFooter,
    Logo,
  },
  props: {
    modelValue: {
      type: Array,
    },
  },
  setup(props) {
    const src = ref(0)

    onMounted(() => {
      if (props.modelValue.length < 1) return

      setInterval(() => {
        src.value = props.modelValue[src.value + 1] ? src.value + 1 : 0
      }, 3000)
    })

    return {
      src,
    }
  },
})
</script>
