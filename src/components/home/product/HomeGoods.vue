<template>
  <div class="goods-item">
    <RouterLink to="/" class="image">
      <img v-lazyload="goods.picture" :alt="goods.name" />
    </RouterLink>
    <p class="name">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">
      <PriceIcon :price="goods.price"></PriceIcon>
    </p>

    <div class="extra">
      <RouterLink to="/">
        <span>找相似</span>
        <span>发现更多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PriceIcon from "@/components/libraries/icons/PriceIcon.vue"
import type { ProductGoods } from "@/types/home/home"

defineProps<{
  goods: ProductGoods
}>()
</script>
<style lang="scss" scoped>
.goods-item {
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  align-items: center;
  width: 24rem;
  height: 30rem;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;

  .image {
    display: block;
    width: 16rem;
    height: 16rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  p {
    margin-top: 0.6rem;
    font-size: 1.5rem;
    width: 100%;

    &.name {
      height: 4.4rem;
    }

    &.desc {
      color: #666;
    }

    &.price {
      font-size: 1.8rem;
    }
  }

  &:hover {
    border-color: $theme-primary-color;
    .extra {
      transform: none;
    }
  }

  .extra {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8.6rem;
    background-color: $theme-primary-color;
    text-align: center;
    transform: translate3d(0, 100%, 0);
    transition: all 0.5s;

    span {
      display: block;
      width: 12rem;
      margin: 0 auto;
      color: #fff;
      font-size: 1.3rem;
      line-height: 3rem;

      &:first-child {
        font-size: 1.8rem;
        border-bottom: 0.1rem solid #fff;
        line-height: 4rem;
        margin-top: 0.5rem;
      }
    }
  }
}
</style>
