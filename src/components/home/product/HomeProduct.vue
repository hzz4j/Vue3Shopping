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
        <li class="goods" v-for="i in 10" :key="i">
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
  }
}
</style>
