import { createStore } from "vuex";
import getters from "./getters.js";

import classes from "../data/dataClasses.js";
import teachers from "../data/dataTeacher.js";
import schoolContacts from "../data/dataSchool.js";

let store = createStore({
  state() {
    return {
      classes,
      teachers,
      schoolContacts,
      reload: false,
    };
  },
  getters,
});

export default store;
