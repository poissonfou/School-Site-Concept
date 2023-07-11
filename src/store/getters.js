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
};
