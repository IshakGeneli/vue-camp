import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    name: "Register",
    path: "/register",
    component: () => import("@/views/RegisterPage.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {  
  console.log(to, from);

  const authRequiredRoutes = ["Home"];
  const authNotRequiredRoutes = ["Login", "Register"];

  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.includes(to.name) && _isAuthenticated) {
      next(false);
  }
  
  if (authRequiredRoutes.includes(to.name)) {
    if (!_isAuthenticated) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
