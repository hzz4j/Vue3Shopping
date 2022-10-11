import { request } from "@/utils/request"
import type { CategoryHead } from "@/types/category/CategoryHead"

/**
 * 获取所有分类（顶级，二级，对应的商品推荐数据）
 * @returns CategoryHead
 */
export function getCategoryHead() {
  return request<CategoryHead[]>("/home/category/head", "get")
}
