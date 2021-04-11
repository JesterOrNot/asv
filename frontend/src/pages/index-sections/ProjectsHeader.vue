<template>
  <div
    id="top"
    class="item w-full h-full min-h-screen min-w-screen mx-auto flex flex-col justify-between bg-main"
  >
    <!-- push item -->
    <div class="h-full"></div>

    <div class="h-full flex items-center px-32">
      <div>
        <Title>Projekt A</Title>
        <div class="mt-6">
          <link-button href="#">O projektu</link-button>
        </div>
      </div>
    </div>

    <arrow-section-footer class="h-full pb-8" href="/#o-nas" :inverted="true">
      Zjistěte více o ASV Group
    </arrow-section-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { Title } from "../../components/typography"
import LinkButton from "../../components/elements/LinkButton.vue"
import ArrowSectionFooter from "../../components/layout/ArrowSectionFooter.vue"
import Logo from "../../components/global/Logo.vue"

export default defineComponent({
  components: {
    Title,
    LinkButton,
    ArrowSectionFooter,
    Logo,
  },
})
</script>
