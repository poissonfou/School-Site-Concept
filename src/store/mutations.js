export default {
  storeUser(state, payload) {
    state.users.push(payload);
  },
  storeRequests(state, payload) {
    state.requests.push(payload);
  },
  logUser(state, payload) {
    state.isLoggedIn = payload;
  },
};
