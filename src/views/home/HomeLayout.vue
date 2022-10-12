<template>
  <div class="container">
    <!-- 分类 -->
    <HomeCategory></HomeCategory>

    <!-- 面板 -->
    <PanelComponent mainTitle="新鲜好物品" subTitle="新鲜出炉 品质靠谱">
      <template #right>
        <LookMore></LookMore>
      </template>
    </PanelComponent>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue"
import HomeCategory from "@/components/home/HomeCategory.vue"
import LookMore from "@/components/libraries/more/LookMore.vue"
import { findNew } from "@/api/home"
import type { Goods } from "@/types/home/home"

const goodsNew: Ref<Goods[]> = ref([])

onMounted(async () => {
  goodsNew.value = await findNew()
})
</script>

<style lang="scss" scoped></style>
