import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { transition: "overlay-up-full" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: { transition: "overlay-down-full" },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { transition: "overlay-left" },
    children: [
      {
        path: "forum",
        name: "Forum",
        component: () => import("../views/Forum.vue"),
        meta: { transition: "fade-in-right" },
      },
      {
        path: "prize",
        name: "Prize",
        component: () => import("../views/Prize.vue"),
        meta: { transition: "fade-in-right" },
      },
      {
        path: "fate",
        name: "Fate",
        component: () => import("../views/Fate.vue"),
        meta: { transition: "fade-in-right" },
      },
      {
        path: "problem",
        name: "Problem",
        component: () => import("../views/Problem.vue"),
        meta: { transition: "fade-in-right" },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
