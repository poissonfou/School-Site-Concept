import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import classes from "../dataClasses.js";
import teachers from "../dataTeacher.js";
import schoolContacts from "../dataSchool.js";

let store = createStore({
  state() {
    return {
      users: [],
      requests: [],
      classes,
      teachers,
      schoolContacts,
      isLoggedIn: false,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
