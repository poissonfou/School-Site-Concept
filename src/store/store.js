import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

import classes from "../dataClasses.js";

let store = createStore({
  state() {
    return {
      users: [],
      requests: [],
      classes,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
