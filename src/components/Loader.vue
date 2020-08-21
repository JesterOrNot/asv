<template>
  <div id="loader-container" ref="loaderContainer" v-if="shown">
    <div id="loader-img-container" ref="loaderImg" style="z-index: 9999;position: absolute;">
      <img
        src="http://asvgroup.cz/themes/frontend/img/logo/logo-asv.png"
        style="margin-left: 15px;"
      />
      <div class="loader-inner ball-beat" style="margin-top: 34.44px; text-align: center;">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="circle" ref="loader"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "DefaultLayout",
  data() {
    return {
      shown: true,
    };
  },
  mounted() {
    console.log("[ASV] Loader mounted");
    setTimeout(() => {
      console.log("[ASV] Toggling loader contents");
      this.$refs.loaderImg.classList.add("clicked");
      setTimeout(() => {
        console.log("[ASV] Hiding loader");
        this.$refs.loaderImg.remove();
        this.$refs.loader.classList.add("clicked");
        setTimeout(() => {
          this.shown = false;
        }, 600);
      }, 400);
    }, 400);
  },
});
</script>
