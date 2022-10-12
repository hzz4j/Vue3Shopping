<template>
  <RouterLink to="/" class="look__more-wrapper">
    <span>查看全部</span>
    <NextIcon></NextIcon>
  </RouterLink>
</template>

<style lang="scss" scoped>
.look__more-wrapper {
  font-size: 1.6rem;
  span {
    color: $gray-deep-color;
    margin-right: 1rem;
  }

  &:hover {
    span,
    i {
      color: $theme-primary-color;
    }
  }
}
</style>
