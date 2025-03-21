import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SummaryView from "@/views/SummaryView.vue";
import ProfileManagementView from "@/views/ProfileManagementView.vue";
import { pay4meRoutes } from "./pay4me";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/summary/:storeType",
      name: "summary",
      component: SummaryView,
    },
    {
      path: "/profile",
      name: "profile management",
      component: ProfileManagementView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
    ...pay4meRoutes,
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
