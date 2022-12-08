<!-- 热门品牌 -->
<template>
  <PanelComponent main-title="热门品牌" sub-title="国际经典 品质保证">
    <template #right>
      <div class="btns">
        <PrevIcon class="btn"></PrevIcon>
        <NextIcon class="btn"></NextIcon>
      </div>
    </template>

    <ul class="brand-wrapper" ref="target">
      <li v-for="idx in 10" :key="idx">
        <img
          src="http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/brand_goods_1.jpg"
          alt=""
        />
      </li>
    </ul>
  </PanelComponent>
</template>

<script setup lang="ts">
import { useIntersectionObserver } from "@/composables/useIntersectionObserver"
import { ref, onMounted } from "vue"
const target = ref(null)

onMounted(() => {
  useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
      console.log("loaded data")
    }
  })
})
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
  }
}
.brand-wrapper {
  display: flex;
  flex: 1;
  width: 100%;
  height: 34.5rem;
  overflow: hidden;
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
  }
}
</style>
