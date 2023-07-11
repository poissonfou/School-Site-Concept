import { createStore } from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

let store = createStore({
  state() {
    return {
      isLoggedIn: false,
      users: [],
      requests: [],
    };
  },
  mutations,
  actions,
  getters,
});

export default store;
