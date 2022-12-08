// 参考: https://vueuse.org/core/useIntersectionObserver/

import { unref, type Ref } from "vue"

/**
 *
 * @param target vue ref元素
 * @param callback 回调函数IntersectionObserver的回调API  https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
 * @param options  IntersectionObserver的参数设置
 */
export function useIntersectionObserver(
  target: Ref<any>,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {
    rootMargin: "0px",
    threshold: 0.1,
  }
) {
  console.log("订阅懒加载")
  const observer = new IntersectionObserver(callback, options)
  // unref 去除响应式
  observer.observe(unref(target))
  return { observer }
}
