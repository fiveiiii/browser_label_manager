import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: Home,
    children:[
      {
        path: '/',
        name: 'default',
        component: () => import("@/views/Default.vue") 
      },
      {
        path: '/study',
        name: 'study',
        component: () => import("@/views/Study.vue") 
      },
      {
        path: '/photoReports',
        name: 'photoReports',
        component: () => import("@/views/PhotoReports.vue") 
      },
      {
        path: '/game',
        name: 'game',
        component: () => import("@/views/Games.vue") 
      },
    ]
  },
  {
    path: "*",
    name: "404",
    meta: {
      title: "页面被吃掉了",
    },
    component: () => import("@/views/View404.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
