<template>
  <PanelComponent mainTitle="新鲜好物品" subTitle="新鲜出炉 品质靠谱">
    <template #right>
      <LookMore></LookMore>
    </template>

    <div class="transition-wrapper" ref="target">
      <Transition name="fade">
        <template v-if="goods.length === 0">
          <HomeSkeleton bg-color="#f0f9f4"></HomeSkeleton>
        </template>
        <ul class="goods-wrapper" v-else>
          <li class="goods" v-for="item in goods" :key="item.id">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="name">{{ item.name }}</p>
              <PriceIcon :price="item.price"></PriceIcon>
            </div>
          </li>
        </ul>
      </Transition>
    </div>
  </PanelComponent>
</template>

<script lang="ts" setup>
import { findNew } from "@/api/home"
import HomeSkeleton from "@/components/home/HomeSkeleton.vue"
import { useLazyData } from "@/composables/useLazyData"

const { target, result: goods } = useLazyData(findNew)
</script>

<style lang="scss" scoped>
.goods-wrapper {
  display: flex;
  justify-content: space-between;
  .goods {
    width: 30.6rem;
    height: 40.6rem;
    background-color: #f0f9f4;
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
