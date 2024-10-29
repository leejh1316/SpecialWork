import { RouteItem, RouteRecordRaw } from "vue-router";

export const routeRecode: RouteItem[] = [
  {
    path: "/",
    name: "main",
    icon: "home",
    component: () => import("@feature/main/Main.vue"),
  },
];

export const generateRouteRecordRaw = (): RouteRecordRaw[] => {
  return routeRecode.map(({ icon, ...record }) => record);
};
