<template>
  <div class="container">
    <!-- 分类 -->
    <section>
      <HomeCategory></HomeCategory>
    </section>

    <section>
      <!-- 新鲜好物 -->
      <HomeNew></HomeNew>
      <!-- 人气推荐 -->
      <HomeHot></HomeHot>
      <!-- 品牌推荐 -->
      <HomeBrand></HomeBrand>
      <!-- 商品专区 -->
      <HomeProduct></HomeProduct>
      <!-- 最新商品 -->
      <HomeSpecial></HomeSpecial>
    </section>
  </div>
</template>

<script setup lang="ts">
import HomeCategory from "@/components/home/HomeCategory.vue"
import HomeNew from "@/components/home/HomeNew.vue"
import HomeHot from "@/components/home/HomeHot.vue"
import HomeBrand from "@/components/home/HomeBrand.vue"
import HomeSpecial from "@/components/home/HomeSpecial.vue"
import HomeProduct from "@/components/home/product/HomeProduct.vue"
</script>

<style lang="scss" scoped></style>
