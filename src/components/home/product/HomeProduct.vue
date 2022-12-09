<template>
  <PanelComponent main-title="居家">
    <template #right>
      <div class="sub-links">
        <RouterLink to="/">海鲜</RouterLink>
        <RouterLink to="/">水果</RouterLink>
        <RouterLink to="/">蔬菜</RouterLink>
        <RouterLink to="/">水产</RouterLink>
        <RouterLink to="/">禽肉</RouterLink>
      </div>
      <LookMore></LookMore>
    </template>

    <section class="content-wrapper">
      <RouterLink class="cover" to="/">
        <img
          src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/fresh_goods_cover.jpg"
          alt=""
        />
        <strong class="label">
          <span>生鲜馆</span>
          <span>全场3件7折</span>
        </strong>
      </RouterLink>
      <ul class="goods__list-wrapper">
        <li class="goods" v-for="i in 8" :key="i">
          <HomeGoods></HomeGoods>
        </li>
      </ul>
    </section>
  </PanelComponent>
</template>
<script lang="ts" setup>
import HomeGoods from "@/components/home/product/HomeGoods.vue"
</script>
<style lang="scss" scoped>
.sub-links {
  flex: 1;
  a {
    font-size: 1.6rem;
    text-decoration: none;
    padding: 0.2rem 2rem;

    &:hover {
      background-color: $theme-primary-color;
      color: #fff;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
    }
  }
}

.content-wrapper {
  display: grid;
  grid-template-columns: 240px repeat(1, 1fr);
  grid-column-gap: 1rem;
  .cover {
    position: relative;
    img {
      width: 100%;
      height: 61rem;
      object-fit: cover;
    }

    .label {
      position: absolute;
      left: 0%;
      top: 50%;
      transform: translate(0%, -50%);
      display: flex;
      width: 19.8rem;
      height: 6.6rem;
      line-height: 6.6rem;
      span {
        display: inline-block;
        font-size: 1.6rem;
        color: #fff;

        text-align: center;

        &:first-child {
          width: 7.6rem;
          background-color: rgba(0, 0, 0, 0.9);
        }

        &:last-child {
          background-color: rgba(0, 0, 0, 0.7);
          flex: 1;
        }
      }
    }
  }

  .goods__list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
