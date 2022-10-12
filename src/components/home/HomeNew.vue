<template>
  <PanelComponent mainTitle="新鲜好物品" subTitle="新鲜出炉 品质靠谱">
    <template #right>
      <LookMore></LookMore>
    </template>

    <div class="goods-wrapper">
      <div class="goods" v-for="item in goods" :key="item.id">
        <img :src="item.picture" alt="" />
        <div class="info">
          <p class="desc">{{ item.desc }}</p>
          <PriceIcon :price="item.price"></PriceIcon>
        </div>
      </div>
    </div>
  </PanelComponent>
</template>

<script lang="ts" setup>
import { onMounted, ref, type Ref } from "vue"
import LookMore from "@/components/libraries/more/LookMore.vue"
import { findNew } from "@/api/home"
import type { Goods } from "@/types/home/home"

const goods: Ref<Goods[]> = ref([])

onMounted(async () => {
  goods.value = await findNew()
})
</script>
