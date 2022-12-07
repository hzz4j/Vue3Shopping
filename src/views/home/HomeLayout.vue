<template>
  <div class="container">
    <!-- 分类 -->
    <section>
      <HomeCategory></HomeCategory>
    </section>

    <section>
      <HomeNew></HomeNew>
      <HomeHot></HomeHot>
      <HomeBrand></HomeBrand>
    </section>
  </div>
</template>

<script setup lang="ts">
import HomeCategory from "@/components/home/HomeCategory.vue"
import HomeNew from "@/components/home/HomeNew.vue"
import HomeHot from "@/components/home/HomeHot.vue"
import HomeBrand from "@/components/home/HomeBrand.vue"
</script>

<style lang="scss" scoped></style>
