import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import store from "../store"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../components/wrapper/Scroll.vue"),
    children: [
      {
        path: "/contact",
        component: () => import("../pages/contact.vue"),
      },
      {
        path: "/projects",
        component: () => import("../pages/projects.vue"),
      },
      {
        path: "/project/:id",
        component: () => import("../pages/project.vue"),
      },
      {
        path: "/services",
        component: () => import("../pages/services.vue"),
      },
      {
        path: "/",
        component: () => import("../pages/index.vue"),
      },
    ],
  },
]

const router = createRouter({ routes, history: createWebHistory() })

router.beforeEach(async () => {
  if (store.loaded) store.loaded = false

  // Wait 500ms for the transition to end
  await new Promise((res, rej) => setTimeout(res, 500))
})

export default router
