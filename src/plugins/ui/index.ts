/**
 * 该插件用于安装组件
 */
import type { App } from "vue"

import SkeletonComponent from "@/components/libraries/skeleton/SkeletonComponent.vue"
import CarouselComponent from "@/components/libraries/carousel/CarouselComponent.vue"
import NextIcon from "@/components/libraries/icons/NextIcon.vue"
import PrevIcon from "@/components/libraries/icons/PrevIcon.vue"
import PriceIcon from "@/components/libraries/icons/PriceIcon.vue"
import SeeIcon from "@/components/libraries/icons/SeeIcon.vue"
import MsgIcon from "@/components/libraries/icons/MsgIcon.vue"
import LikeIcon from "@/components/libraries/icons/LikeIcon.vue"
import LookMore from "@/components/libraries/more/LookMore.vue"
import PanelComponent from "@/components/libraries/panel/PanelComponent.vue"
import NavBread from "@/components/libraries/brand/NavBread.vue"

import defaultImg from "@/assets/images/200.png"

/**
 * 图片懒加载指令
 */
function defineDirective(app: App) {
  app.directive("lazyload", (el, binding) => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          observer.unobserve(el)

          if (el instanceof HTMLImageElement) {
            // 图片加载错误
            el.onerror = () => (el.src = defaultImg)
            // 获取参数绑定值
            el.src = binding.value
          }
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    )
    observer.observe(el)
  })
}

const UIPlugin = {
  install(app: App) {
    app.component("SkeletonComponent", SkeletonComponent)
    app.component("CarouselComponent", CarouselComponent)
    app.component("PanelComponent", PanelComponent)
    app.component("LookMore", LookMore)
    app.component("NextIcon", NextIcon)
    app.component("PrevIcon", PrevIcon)
    app.component("PriceIcon", PriceIcon)
    app.component("SeeIcon", SeeIcon)
    app.component("MsgIcon", MsgIcon)
    app.component("LikeIcon", LikeIcon)
    app.component("NavBread", NavBread)
    defineDirective(app)
  },
}

export default UIPlugin
