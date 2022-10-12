import { createApp } from "vue"
import { createPinia } from "pinia"
import router from "./router"

import "@/assets/styles/common.scss"
import App from "./App.vue"
import UIPlugin from "@/plugins/ui"

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(UIPlugin)

app.mount("#app")
