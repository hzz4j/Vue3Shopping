import { request } from "@/utils/request"
import type { Banner } from "@/types/category/Banner"

/**
 * 获取广告图
 */
export function getBanner() {
  return request<Banner[]>("/home/banner", "get")
}
