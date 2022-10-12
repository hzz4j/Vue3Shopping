/**
 * 该插件用于安装组件
 */
import type { App } from "vue"

import SkeletonComponent from "@/components/libraries/skeleton/SkeletonComponent.vue"
import CarouselComponent from "@/components/libraries/carousel/CarouselComponent.vue"
import NextIcon from "@/components/libraries/icons/NextIcon.vue"
import PrevIcon from "@/components/libraries/icons/PrevIcon.vue"
import PriceIcon from "@/components/libraries/icons/PriceIcon.vue"
import LookMore from "@/components/libraries/more/LookMore.vue"
import PanelComponent from "@/components/libraries/panel/PanelComponent.vue"

const UIPlugin = {
  install(app: App) {
    app.component("SkeletonComponent", SkeletonComponent)
    app.component("CarouselComponent", CarouselComponent)
    app.component("PanelComponent", PanelComponent)
    app.component("LookMore", LookMore)
    app.component("NextIcon", NextIcon)
    app.component("PrevIcon", PrevIcon)
    app.component("PriceIcon", PriceIcon)
  },
}

export default UIPlugin
