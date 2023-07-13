export default {
  storeUser(context, payload) {
    context.commit("storeUser", {
      ...payload,
    });
  },
  storeRequests(context, payload) {
    context.commit("storeRequests", {
      ...payload,
    });
  },
  logUser(context, payload) {
    context.commit("logUser", payload);
  },
};
