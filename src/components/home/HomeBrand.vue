<!-- 热门品牌 -->
<template>
  <PanelComponent main-title="热门品牌" sub-title="国际经典 品质保证">
    <template #right>
      <div class="btns">
        <PrevIcon
          class="btn"
          @click="toggle(-1)"
          :class="{ disabled: index === 0 }"
        ></PrevIcon>
        <NextIcon
          class="btn"
          @click="toggle(1)"
          :class="{ disabled: index === 1 }"
        ></NextIcon>
      </div>
    </template>
    <div class="transition-wrapper" ref="target">
      <Transition name="fade">
        <template v-if="GoodsBrands.length === 0">
          <ul class="brand-wrapper">
            <li v-for="i in 5" :key="i">
              <SkeletonComponent
                width="24rem"
                height="35rem"
                bg-color="rgb(228, 228, 228)"
                class="skeleton"
              ></SkeletonComponent>
            </li>
          </ul>
        </template>
        <div class="box" v-else>
          <ul
            class="brand-wrapper"
            :style="{ transform: `translateX(${-index * 1240}px)` }"
          >
            <li v-for="GoodsBrand in GoodsBrands" :key="GoodsBrand.id">
              <img :src="GoodsBrand.picture" :alt="GoodsBrand.name" />
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </PanelComponent>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { findGoodsBrand } from "@/api/home"
import { useLazyData } from "@/composables/useLazyData"
const { target, result: GoodsBrands } = useLazyData(findGoodsBrand)
const index = ref(0)

const toggle = (step: number) => {
  const newIndex = index.value + step
  if (newIndex < 0 || newIndex > 1) return
  index.value = newIndex
}
</script>

<style lang="scss" scoped>
.btns {
  .btn {
    font-size: 1.5rem;
    padding: 0.3rem;
    color: #fff;
    margin-left: 10px;
    border-radius: 0.3rem;
    cursor: pointer;
    background-color: $theme-primary-color;

    &.disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
}

.box {
  width: 100%;
  overflow: hidden;
}
.brand-wrapper {
  display: flex;
  flex: 1;
  width: 100%;
  height: 34.5rem;
  li {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
    img {
      width: 24rem;
      height: 100%;
      object-fit: cover;
    }

    :deep(.skeleton) {
      margin: 0;
    }
  }
}
</style>
