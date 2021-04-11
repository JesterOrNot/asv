import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

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

export default router
