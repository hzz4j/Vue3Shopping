import { request } from "@/utils/request"
import type { Banner } from "@/types/category/Banner"
import type { GoodsNew, GoodsHot } from "@/types/home/home"

/**
 * 获取广告图
 */
export function getBanner() {
  return request<Banner[]>("/home/banner", "get")
}
/**
 * @returns 首页-新鲜好物商品
 */
export function findNew() {
  return request<GoodsNew[]>("/home/new", "get")
}

/**
 *
 * @returns 首页-人气推荐
 */
export function findHot() {
  return request<GoodsHot[]>("/home/hot", "get")
}
