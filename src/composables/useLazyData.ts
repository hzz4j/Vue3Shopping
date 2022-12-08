import { ref, onMounted, type Ref } from "vue"
import { useIntersectionObserver } from "./useIntersectionObserver"

type GetData<T> = () => Promise<T[]>
/**
 * 数据懒加载
 * @param apiFn 请求的API
 * @returns
 */
export function useLazyData<T>(apiFn: GetData<T>) {
  const target = ref(null)
  const result: Ref<T[]> = ref([])

  onMounted(() => {
    useIntersectionObserver(target, async ([{ isIntersecting }]) => {
      if (isIntersecting && result.value.length === 0) {
        console.log("数据懒加载lazyData")
        const data = await apiFn()
        result.value = data
      }
    })
  })

  return { target, result }
}
