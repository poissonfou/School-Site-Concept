import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import EnrollPage from "../src/components/pages/EnrollPage.vue";
import InovationsPage from "../src/components/pages/InovationsPage.vue";
import LoginForm from "../src/components/pages/LoginForm.vue";
import StudentBoard from "../src/components/pages/StudentBoard.vue";

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
    {
      name: "login",
      path: "/login",
      component: LoginForm,
    },
    {
      name: "board",
      path: "/board",
      component: StudentBoard,
    },
  ],
});

export default router;
