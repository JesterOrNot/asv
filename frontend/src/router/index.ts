import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

import Contact from "../pages/contact.vue"
import Index from "../pages/index.vue"
import Project from "../pages/project.vue"
import Projects from "../pages/projects.vue"
import WhatDoWeDo from "../pages/services.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/project/:slug",
    component: Project,
  },
  {
    path: "/about",
    component: WhatDoWeDo,
  },
  {
    path: "/",
    component: Index,
  },
]

const router = createRouter({ routes, history: createWebHistory() })

export default router
