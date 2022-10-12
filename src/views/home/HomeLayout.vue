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
import HomeCategory from "@/components/home/HomeCategory.vue"
import LookMore from "../../components/libraries/more/LookMore.vue"
</script>

<style lang="scss" scoped></style>
