export default {
  userIsAuthenticated(state) {
    return state.isLoggedIn;
  },
  returnRequests(state) {
    return state.requests;
  },
  returnUsers(state) {
    return state.users;
  },
  returnClasses(state) {
    return state.classes;
  },
  returnTeachers(state) {
    return state.teachers;
  },
  returnSchoolData(state) {
    return state.schoolContacts;
  },
};
