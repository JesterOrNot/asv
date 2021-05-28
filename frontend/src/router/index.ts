import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import store from "../store"
import { $http } from "../api"

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
  {
    path: "/admin/login",
    component: () => import("../pages/admin/auth/login.vue"),
  },
  {
    path: "/admin",
    component: () => import("../pages/admin/index.vue"),
    beforeEnter: async (to, from) => {
      try {
        const { data } = await $http.get("/user/@me")

        if (!data.success) return "/admin/login"

        store.user = data.data.user

        return true
      } catch {
        return "/admin/login"
      }
    },
  },
]

const router = createRouter({ routes, history: createWebHistory() })

router.beforeEach(async (to, from) => {
  // Close the mobile menu
  store.mobileMenuOpen = false

  // Hash changes triggered via router-link would also call
  // this beforeEach hook, causing the loader to show up and
  // then never hide.
  if (to.path === from.path && to.hash !== from.hash) return

  store.loaded = false

  // Wait 500ms for the transition to end
  await new Promise((res, rej) => setTimeout(res, 500))
})

export default router
