<template>
  <div
    id="top"
    class="item w-full h-full min-h-screen mx-auto flex justify-center items-center bg-main"
  >
    <div
      class="w-full h-full px-4 md:px-8 lg:px-32 flex flex-col justify-between bg-gray-700 bg-opacity-30"
    >
      <!-- push item -->
      <div class="h-full"></div>

      <div class="h-full flex items-center">
        <div>
          <Title>Projekt A</Title>
          <div class="mt-6">
            <link-button href="#">O projektu</link-button>
          </div>
        </div>
      </div>

      <arrow-section-footer class="h-full" href="#o-nas" :inverted="true">
        Zjistěte více o ASV Group
      </arrow-section-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Title } from "../../components/typography"
import LinkButton from "../../components/elements/LinkButton.vue"
import ArrowSectionFooter from "../../components/layout/ArrowSectionFooter.vue"

export default defineComponent({
  components: {
    Title,
    LinkButton,
    ArrowSectionFooter,
  },
})
</script>
