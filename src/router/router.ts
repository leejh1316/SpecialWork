import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { generateRouteRecordRaw } from "./routeRecord";
const routes: RouteRecordRaw[] = [...generateRouteRecordRaw()];
const router = createRouter({
  history: createWebHistory('/proxy/3000/absproxy/3000'),
  routes: routes,
});

export default router;
