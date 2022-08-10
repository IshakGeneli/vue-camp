import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name:"Home",
    path: "/",
    component: () => import("./views/HomePage"),
  },
  {
    name:"About",
    path: "/hakkımda",
    component: () => import("./views/AboutPage"),
  },
  {
    name:"Detail",
    path: "/detay/:id/:otherParam",
    component: () => import("./views/DetailPage"),
  },
];

const router = createRouter({
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory(),
});

export default router;
