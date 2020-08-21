<template>
  <div>
    <MainHero/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainHero from '@/components/index/MainHero.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
      MainHero
  }
});
</script>
