import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/pages/HomePage.vue";
import EnrollPage from "../components/pages/EnrollPage.vue";
import InovationsPage from "../components/pages/InovationsPage.vue";
import LoginForm from "../components/pages/LoginForm.vue";
import StudentBoard from "../components/pages/StudentBoard.vue";
import ListClasses from "../components/pages/ListClasses.vue";
import ProfilePage from "../components/pages/ProfilePage";

import redirectInitial from "./redirect";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    redirectInitial,
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
      path: "/board/:userId",
      component: StudentBoard,
    },
    {
      name: "classes",
      path: "/classes/:userId",
      component: ListClasses,
    },
    {
      name: "profile",
      path: "/profile/:userId",
      component: ProfilePage,
    },
  ],
});

export default router;
