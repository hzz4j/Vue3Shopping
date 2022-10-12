/**
 * 该插件用于安装组件
 */
import SkeletonComponent from "@/components/skeleton/SkeletonComponent.vue"
import CarouselComponent from "@/components/libraries/carousel/CarouselComponent.vue"
import type { App } from "vue"

const UIPlugin = {
  install(app: App) {
    app.component("SkeletonComponent", SkeletonComponent),
      app.component("CarouselComponent", CarouselComponent)
  },
}

export default UIPlugin
