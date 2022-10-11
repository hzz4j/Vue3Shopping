<template>
  <div class="home__category-wrapper">
    <ul class="menus">
      <li
        v-for="category in categoryHeads"
        :key="category.id"
        class="menu"
        @mouseenter="hoverOnMenu(category.id)"
      >
        <RouterLink to="/" class="link">{{ category.name }}</RouterLink>

        <RouterLink
          to="/"
          v-for="item in category.children"
          :key="item.id"
          class="link"
        >
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>

    <section class="layer-wrapper">
      <h4 class="title">分类推荐<small>根据您的浏览或者购买记录推荐</small></h4>
      <ul class="goods-wrapper">
        <li v-for="goods in currentGoods" :key="goods.id" class="goods">
          <RouterLink to="/" class="link">
            <img :src="goods.picture" />
            <div class="info">
              <p class="name">{{ goods.name }}</p>
              <p class="description">{{ goods.desc }}</p>
              <p class="price"><i>¥</i>{{ goods.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref } from "vue"
import { RouterLink } from "vue-router"
import { useCategoryStore } from "@/store/category"
import type { Goods } from "@/types/category/Goods"

const categoryStore = useCategoryStore()
const categoryHeads = computed(() => categoryStore.categoryHeadsWithTwoChildren)
const currentGoods: Ref<Goods[]> = ref([])

function hoverOnMenu(categoryId: string) {
  const re = categoryHeads.value.find((item) => item.id === categoryId)
  if (re) currentGoods.value = re.goods
}
</script>

<style lang="scss" scoped>
.home__category-wrapper {
  display: flex;
  flex-wrap: nowrap;
  .menus {
    width: 25rem;
    height: $category-height;

    background-color: $category-bg-color;

    .menu {
      padding-left: 4rem;
      height: 5rem;
      line-height: 5rem;
      &:hover {
        background-color: $theme-primary-color;
      }
      .link {
        margin-right: 0.4rem;
        font-size: 1.4rem;
        color: #fff;

        &:first-child {
          font-weight: 500;
          font-size: 1.6rem;
        }
      }
    }
  }

  .layer-wrapper {
    padding: 0 1.5rem;
    width: 99rem;
    height: $category-height;
    background-color: $sub-category-bg-color;

    .title {
      line-height: 8rem;
      font-size: 2rem;
      font-weight: normal;

      small {
        margin-left: 2rem;
        font-size: 1.6rem;
        color: #666;
      }
    }

    .goods-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      gap: 1.5rem;

      .goods {
        padding: 1rem;
        width: 31rem;
        height: 12rem;
        background-color: #fff;
        .link {
          display: flex;
          justify-content: flex-start;
          gap: 1rem;
          img {
            width: 9.5rem;
            height: 9.5rem;
            object-fit: cover;
          }

          .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .name {
              font-size: 1.6rem;
              color: #666;
            }

            .description {
              color: #999;
            }

            .price {
              font-size: 2.2rem;
              color: $priceColor;

              i {
                font-size: 1.6rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
