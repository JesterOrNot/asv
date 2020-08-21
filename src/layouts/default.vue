<template>
  <div>
    <loader />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loader from "@/components/Loader.vue";

export default Vue.extend({
  name: "DefaultLayout",
  components: {
    Loader,
  },
});
</script>
