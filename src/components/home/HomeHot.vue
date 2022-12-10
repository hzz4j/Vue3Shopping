<template>
  <PanelComponent main-title="人气推荐" sub-title="人气爆款 不容错过">
    <div class="transition-wrapper" ref="target">
      <Transition name="fade">
        <template v-if="goods.length === 0">
          <HomeSkeleton bg-color="#f0f9f4"></HomeSkeleton>
        </template>
        <ul class="goods-wrapper" v-else>
          <li class="goods" v-for="item in goods" :key="item.id">
            <img :src="item.picture" alt="" />
            <div class="info">
              <h3 class="title">{{ item.title }}</h3>
              <p class="alt">{{ item.alt }}</p>
            </div>
          </li>
        </ul>
      </Transition>
    </div>
  </PanelComponent>
</template>
<script lang="ts" setup>
import HomeSkeleton from "@/components/home/HomeSkeleton.vue"
import { findHot } from "@/api/home"
import { useLazyData } from "@/composables/useLazyData"

const { result: goods, target } = useLazyData(findHot)
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
