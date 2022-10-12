<template>
  <div class="container">
    <!-- 分类 -->
    <section>
      <HomeCategory></HomeCategory>
    </section>

    <section>
      <HomeNew></HomeNew>
    </section>
  </div>
</template>

<script setup lang="ts">
import HomeCategory from "@/components/home/HomeCategory.vue"
import HomeNew from "@/components/home/HomeNew.vue"
</script>

<style lang="scss" scoped></style>
