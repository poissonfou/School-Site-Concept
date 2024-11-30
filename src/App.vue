<template>
  <div>
    <TheHeader :key="key" :infos="data" />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue";

export default {
  data() {
    return {
      key: 0,
      data: [],
    };
  },
  components: {
    TheHeader,
    TheFooter,
  },
  watch: {
    $route() {
      this.key += 1;

      let login = JSON.parse(sessionStorage.getItem("isLoggedIn"));

      if (login == true) {
        let data = JSON.parse(sessionStorage.getItem("arrayUsers"));

        let idx = data.findIndex((e) => e.isLoggedIn == true);

        this.data = [data[idx]];
      }
    },
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

html {
  scroll-behavior: smooth;
  height: 0%;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100vh;
}

a {
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

a:focus {
  outline: none;
}

.route-enter-from {
  opacity: 0;
  transform: translate(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translate(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
