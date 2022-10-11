import { createRouter, createWebHistory } from "vue-router"
import WebLayout from "@/views/WebLayout.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: WebLayout,
  },
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory("vue3"),
  routes,
})

export default router
