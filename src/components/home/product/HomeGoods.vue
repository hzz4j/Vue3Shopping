<template>
  <div class="goods-item">
    <RounterLink to="/" class="image">
      <img
        src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_1.jpg"
        alt=""
      />
    </RounterLink>
    <p class="name">美威 智利原味三文鱼排 240g/袋 4片装</p>
    <p class="desc ellipsis">海鲜年货</p>
    <p class="price">
      <PriceIcon price="109.00"></PriceIcon>
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
