<template>
  <ul>
    <li v-for="category in categoryHeads" :key="category.id">
      <RouterLink to="/">{{ category.name }}</RouterLink>

      <RouterLink to="/" v-for="item in category.children" :key="item.id">
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

<style lang="scss" scoped></style>
