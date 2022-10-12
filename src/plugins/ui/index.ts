/**
 * 该插件用于安装组件
 */
import SkeletonComponent from "@/components/skeleton/SkeletonComponent.vue"
import type { App } from "vue"

const UIPlugin = {
  install(app: App) {
    app.component("SkeletonComponent", SkeletonComponent)
  },
}

export default UIPlugin
