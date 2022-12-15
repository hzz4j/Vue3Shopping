<!-- 
  面包屑
  使用方式：
  <NavBread parentPath="/category/1005000" 
    parentName="电器">空调</NavBread>
-->
<template>
  <div class="bread-wrapper">
    <div class="bread-item">
      <RouterLink to="/" class="bread-item">首页</RouterLink>
      <NextIcon></NextIcon>
    </div>
    <div v-if="parentName">
      <RouterLink :to="parentPath" class="bread-item">{{
        parentName
      }}</RouterLink>
      <NextIcon></NextIcon>
    </div>
    <div class="bread-item">
      <span><slot></slot></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue"
interface Props {
  parentName: string
  parentPath: string
}

withDefaults(defineProps<Props>(), {
  parentName: "",
  parentPath: "",
})

const render = () => h("div", { id: 100 }, "Q10Viking")
</script>

<style lang="scss" scoped>
.bread-wrapper {
  padding: 2.5rem 1rem;
  font-size: 1.6rem;
  .bread-item {
    display: inline-block;
    color: #666;
    padding: 0 0.25rem;

    &:hover {
      color: $theme-primary-color;
    }
  }
}
</style>
