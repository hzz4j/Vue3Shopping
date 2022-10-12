<template>
  <div class="skeleton" :style="size">111</div>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface Props {
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: "10rem",
  height: "10rem",
})

const size = computed(() => {
  return {
    width: props.width,
    height: props.height,
  }
})
</script>

<style lang="scss" scoped>
.skeleton {
  display: inline-block;
  margin: 1rem;
  color: #fff;
  background-color: white;
}
</style>
