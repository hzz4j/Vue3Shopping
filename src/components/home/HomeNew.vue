<template>
  <PanelComponent mainTitle="新鲜好物品" subTitle="新鲜出炉 品质靠谱">
    <template #right>
      <LookMore></LookMore>
    </template>

    <ul class="goods-wrapper">
      <li class="goods" v-for="item in goods" :key="item.id">
        <img :src="item.picture" alt="" />
        <div class="info">
          <p class="name">{{ item.name }}</p>
          <PriceIcon :price="item.price"></PriceIcon>
        </div>
      </li>
    </ul>
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

<style lang="scss" scoped>
.goods-wrapper {
  display: flex;
  justify-content: space-between;
  .goods {
    width: 30.6rem;
    height: 40.6rem;
    @include hoverShadow();
    img {
      width: 100%;
      height: 75%;
      object-fit: contain;
    }

    .info {
      height: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      .name {
        @include textEllipse();
        // 需要给宽度
        width: 100%;
        padding: 0 1rem;
        font-size: 2.2rem;
      }
    }
  }
}
</style>
