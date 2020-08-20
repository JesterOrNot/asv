import Vue from "vue";
import VueRouter, { RouteConfig, RouterMode } from "vue-router";

Vue.use(VueRouter);

const mode: RouterMode = "history";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/pages/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL || "https://asvgroup.cz",
  mode,
  routes,
});

export default router;
