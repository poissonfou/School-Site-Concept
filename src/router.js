import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import EnrollPage from "../src/components/pages/EnrollPage.vue";

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
  ],
});

export default router;
