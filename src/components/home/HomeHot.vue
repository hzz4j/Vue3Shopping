<template>
  <PanelComponent main-title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-wrapper">
      <li class="goods" v-for="item in goods" :key="item.id">
        <img :src="item.picture" alt="" />
        <div class="info">
          <h3 class="title">{{ item.title }}</h3>
          <p class="alt">{{ item.alt }}</p>
        </div>
      </li>
    </ul>
  </PanelComponent>
</template>
<script lang="ts" setup>
import { onMounted, ref, type Ref } from "vue"
import PanelComponent from "@/components/libraries/panel/PanelComponent.vue"
import { findHot } from "@/api/home"
import type { GoodsHot as Goods } from "@/types/home/home"

const goods: Ref<Goods[]> = ref([])
onMounted(async () => {
  goods.value = await findHot()
})
</script>

<style scoped lang="scss">
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
      object-fit: cover;
    }

    .info {
      height: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .title {
        font-size: 2.2rem;
        font-weight: normal;
      }

      .alt {
        color: #999;
        padding-top: 2.2rem;
      }
    }
  }
}
</style>
