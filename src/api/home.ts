import { request } from "@/utils/request"
import type { Banner } from "@/types/category/Banner"
import type { Goods } from "@/types/home/home"

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
  return request<Goods[]>("/home/new", "get")
}
