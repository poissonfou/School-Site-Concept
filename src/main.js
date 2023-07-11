import { createApp } from "vue";
import router from "./router";
import store from "./store/store";

import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);

router.isReady().then(() => {
  app.mount("#app");
});
