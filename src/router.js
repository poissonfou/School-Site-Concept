import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import EnrollPage from "../src/components/pages/EnrollPage.vue";
import InovationsPage from "../src/components/pages/InovationsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "home",
    },
    {
      name: "home",
      path: "/home",
      component: HomePage,
    },
    {
      name: "enroll",
      path: "/enroll",
      component: EnrollPage,
    },
    {
      name: "innovations",
      path: "/innovations",
      component: InovationsPage,
    },
  ],
});

export default router;
