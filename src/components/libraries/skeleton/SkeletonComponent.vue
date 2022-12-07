<template>
  <div class="skeleton-wrapper shan" :style="size">
    <div class="block" :style="{ 'background-color': bgColor }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
  width?: string
  height?: string
  bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: "10rem",
  height: "10rem",
  bgColor: "rgba(255, 255, 255, 0.2)",
})

const size = computed(() => {
  return {
    width: props.width,
    height: props.height,
  }
})
</script>

<style lang="scss" scoped>
.skeleton-wrapper {
  display: inline-block;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.8rem;

  .block {
    width: 100%;
    height: 100%;
    // background-color: rgba($color: #fff, $alpha: 0.2);
  }

  &.shan {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;

      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: skewX(-45deg);
      animation: move 1.5s ease infinite;

      @keyframes move {
        0% {
          left: -100%;
        }
        100% {
          left: 120%;
        }
      }
    }
  }
}
</style>
