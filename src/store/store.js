import { createStore } from "vuex";
import getters from "./getters.js";

import classes from "../dataClasses.js";
import teachers from "../dataTeacher.js";
import schoolContacts from "../dataSchool.js";

let store = createStore({
  state() {
    return {
      classes,
      teachers,
      schoolContacts,
    };
  },
  getters,
});

export default store;
