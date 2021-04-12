<template>
  <div class="_asv-loader_">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="postcss" scoped>
@keyframes _asv-loader_ {
  0% {
    transform: translate(6px, 40px) scale(0);
  }
  25% {
    transform: translate(6px, 40px) scale(0);
  }
  50% {
    transform: translate(6px, 40px) scale(1);
  }
  75% {
    transform: translate(40px, 40px) scale(1);
  }
  100% {
    transform: translate(84px, 40px) scale(1);
  }
}
@keyframes _asv-loader_-r {
  0% {
    transform: translate(84px, 40px) scale(1);
  }
  100% {
    transform: translate(84px, 40px) scale(0);
  }
}
._asv-loader_ div {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(80px, 80px) scale(1);
  @apply bg-white;
  animation: _asv-loader_ 1s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
._asv-loader_ div:nth-child(1) {
  @apply bg-white;
  transform: translate(148px, 80px) scale(1);
  animation: _asv-loader_-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1),
    _asv-loader_-c 1s infinite step-start;
}
._asv-loader_ div:nth-child(2) {
  animation-delay: -0.25s;
  @apply bg-white;
}
._asv-loader_ div:nth-child(3) {
  animation-delay: -0.5s;
  @apply bg-white;
}
._asv-loader_ div:nth-child(4) {
  animation-delay: -0.75s;
  @apply bg-white;
}
._asv-loader_ div:nth-child(5) {
  animation-delay: -1s;
  @apply bg-white;
}
._asv-loader_ {
  backface-visibility: hidden;
  transform-origin: 0 0;
  @apply w-full h-full relative transform translate-x-0 scale-100;
}
._asv-loader_ div {
  box-sizing: content-box;
}
</style>
