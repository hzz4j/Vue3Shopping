<template>
  <!-- header start -->
  <section>
    <GlobalNavHeader></GlobalNavHeader>
    <ShopHeader></ShopHeader>
    <ShopFixHeader></ShopFixHeader>
  </section>
  <!-- header end -->

  <NavBread></NavBread>

  <!-- home start -->
  <main>
    <HomeLayout></HomeLayout>
  </main>
  <!-- home end -->

  <!-- footer start -->
  <section>
    <GlobalFooter></GlobalFooter>
  </section>
  <!-- footer end -->
</template>

<script setup lang="ts">
import GlobalNavHeader from "@/components/header/GlobalNavHeader.vue"
import ShopHeader from "@/components/header/ShopHeader.vue"
import ShopFixHeader from "@/components/header/ShopFixHeader.vue"
import GlobalFooter from "@/components/footer/GlobalFooter.vue"
import HomeLayout from "@/views/home/HomeLayout.vue"

import { useCategoryStore } from "@/store/category"

// 初始化category
const categoryStore = useCategoryStore()
categoryStore.initCategoryHead()
</script>
