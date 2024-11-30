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
      path: "/School-Site-Concept/home",
      component: HomePage,
    },
    {
      name: "enroll",
      path: "/School-Site-Concept/enroll",
      component: EnrollPage,
    },
    {
      name: "innovations",
      path: "/School-Site-Concept/innovations",
      component: InovationsPage,
    },
    {
      name: "login",
      path: "/School-Site-Concept/login",
      component: LoginForm,
    },
    {
      name: "board",
      path: "/School-Site-Concept/board/:userId",
      component: StudentBoard,
    },
    {
      name: "classes",
      path: "/School-Site-Concept/classes/:userId",
      component: ListClasses,
    },
    {
      name: "profile",
      path: "/School-Site-Concept/profile/:userId",
      component: ProfilePage,
    },
  ],
});

export default router;
