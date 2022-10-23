<template>
  <div class="home-skeleton">
    <div
      v-for="i in 4"
      :key="i"
      class="item"
      :style="{ backgroundColor: props.bgColor }"
    >
      <SkeletonComponent
        :bg-color="bgColor"
        width="30.6rem"
        height="30.45rem"
      ></SkeletonComponent>
      <SkeletonComponent
        :bg-color="bgColor"
        width="16rem"
        height="2.4rem"
      ></SkeletonComponent>
      <SkeletonComponent
        :bg-color="bgColor"
        width="12rem"
        height="2.4rem"
      ></SkeletonComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
const bgColor = ref("#e4e4e4")

const props = defineProps({
  bgColor: {
    type: String,
    default: "#fff",
  },
})
</script>

<style scoped lang="scss">
.home-skeleton {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30.6rem;
  }
}
</style>
