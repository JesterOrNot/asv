<template>
  <section class="hero is-primary is-main is-fullheight">
    <div class="hero-inner">
      <div class="hero-body">
        <div class="container is-fluid">
          <h1 class="text-4xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl">Nějaký strašně chytlavý slogan</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
//   data() {
//     return {
//       availableImages: [
//         "http://asvgroup.cz/themes/frontend/img/homepage/bg.jpg",
//       ], // todo: remove mock,
//       imageChangeInterval: 5000,
//       image: "http://asvgroup.cz/themes/frontend/img/homepage/bg.jpg",
//     };
//   },
//   mounted() {
//     const hero = (this.$refs as any).heroImage as Element;
//     console.log(
//       "[ASV] Scheduling pickAnotherImage for 3000ms @ MainHero.pickAnotherImage()"
//     );
//     setTimeout(this.pickAnotherImage, this.imageChangeInterval);
//   },
//   methods: {
//     pickAnotherImage() {
//       const available = this.availableImages.filter(
//         (image) => image !== this.image
//       );

//       const selected = available[Math.floor(Math.random() * available.length)];
//       this.image = selected;
//       console.log(`[ASV] Picked image ${selected} in the main hero`);

//       console.log(
//         "[ASV] Scheduling pickAnotherImage for 3000ms @ MainHero.pickAnotherImage()"
//       );
//       setTimeout(this.pickAnotherImage, this.imageChangeInterval);

//       return available;
//     },
//   },
});
</script>
