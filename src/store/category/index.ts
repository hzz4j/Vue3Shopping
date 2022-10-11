import { defineStore } from "pinia"
import { computed, ref, type Ref } from "vue"

import DefaultCategoryHead from "@/api/defaultCategoryHead"
import type { CategoryHead } from "@/types/category/CategoryHead"
import { getCategoryHead as categoryApi } from "@/api/category"

/**
 * 分类store
 */
export const useCategoryStore = defineStore("category", () => {
  const categoryHeads: Ref<CategoryHead[]> = ref(DefaultCategoryHead)

  /** 只带处理成child只有两个分类 */
  const categoryHeadsWithTwoChildren = computed<CategoryHead[]>(() => {
    return categoryHeads.value.map((item) => ({
      ...item,
      children: item.children.slice(0, 2),
    }))
  })

  async function initCategoryHead() {
    categoryHeads.value = await categoryApi()
  }

  return { categoryHeads, initCategoryHead, categoryHeadsWithTwoChildren }
})
