<template>
  <div class="carousel-wrapper" @mouseenter="stop" @mouseleave="autoPlay">
    <ul class="carousel-body">
      <li>
        <RouterLink to="/">
          <img :src="slides[index]?.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>

    <a href="javascript:void(0)" class="prev" @click="toggle(false)">
      <PrevIcon></PrevIcon>
    </a>
    <a href="javascript:void(0)" class="next" @click="toggle(true)">
      <NextIcon></NextIcon>
    </a>
    <div class="indicator">
      <span
        v-for="i in dotCount"
        :key="i"
        :class="{ active: i - 1 === index }"
        @click="index = i - 1"
      ></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onUnmounted, computed, watch, ref } from "vue"
import type { Banner } from "@/types/category/Banner"

interface Props {
  slides: Banner[]
  duration?: number
  autoPlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: 3000,
  autoPlay: false,
})

const index = ref(0)
let intervalFlag: number
const dotCount = computed(() => {
  return getSlidesLength()
})

onUnmounted(() => clearInterval(intervalFlag))

watch(
  () => props.slides,
  (newvalue) => {
    if (newvalue.length > 0) {
      autoPlay()
    }
  }
)

function autoPlay() {
  if (!props.autoPlay) return
  intervalFlag = setInterval(() => {
    increaseIndex()
  }, props.duration)
}

function increaseIndex() {
  index.value++
  if (index.value >= getSlidesLength()) index.value = 0
}

function decreaseIndex() {
  index.value--
  if (index.value < 0) index.value = getSlidesLength() - 1
}

function getSlidesLength() {
  return props.slides.length
}

function stop() {
  clearInterval(intervalFlag)
}

function toggle(forward: boolean) {
  forward ? increaseIndex() : decreaseIndex()
}
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  position: relative;
  z-index: $caroursel-zindex;

  .carousel-body {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .prev,
  .next {
    display: inline-block;
    position: absolute;
    transform: translateY(-50%);
    width: 4.4rem;
    height: 4.4rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 50%;
    text-align: center;
    line-height: 4.4rem;
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.3);
    opacity: 0;
  }
  .prev {
    top: 50%;
    left: 2rem;
  }

  .next {
    top: 50%;
    right: 2rem;
  }

  &:hover {
    .prev,
    .next {
      opacity: 1;
    }
  }

  .indicator {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    span {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background: $indicator-color;
      border-radius: 50%;
      margin: 0 1rem;

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>
