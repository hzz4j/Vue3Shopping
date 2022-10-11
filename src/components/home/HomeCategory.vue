<template>
  <ul class="menus">
    <li v-for="category in categoryHeads" :key="category.id" class="menu">
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
</template>

<script setup lang="ts">
import { computed } from "vue"
import { RouterLink } from "vue-router"
import { useCategoryStore } from "@/store/category"

const categoryStore = useCategoryStore()
const categoryHeads = computed(() => categoryStore.categoryHeadsWithTwoChildren)
</script>

<style lang="scss" scoped>
.menus {
  width: 25rem;
  height: 50rem;
  padding-left: 4rem;
  background-color: $category-bg-color;

  .menu {
    height: 5rem;
    line-height: 5rem;

    .link {
      margin-right: 0.4rem;
      font-size: 1.4rem;
      color: #fff;

      &:first-child {
        font-weight: 500;
        font-size: 1.6rem;
      }

      &:hover {
        color: $theme-primary-color;
      }
    }
  }
}
</style>
