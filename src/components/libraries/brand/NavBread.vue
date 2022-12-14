<!-- 面包屑 -->
<template>
  <div class="bread-wrapper">
    <RouterLink to="/" class="bread-item">首页</RouterLink>
    <NextIcon></NextIcon>
    <RouterLink to="/" class="bread-item">电器</RouterLink>
    <NextIcon></NextIcon>
    <RouterLink to="/" class="bread-item">水壶</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.bread-wrapper {
  padding: 2.5rem 1rem;
  font-size: 1.6rem;
  .bread-item {
    color: #666;
    padding: 0 0.5rem;

    &:hover {
      color: $theme-primary-color;
    }
  }
}
</style>
