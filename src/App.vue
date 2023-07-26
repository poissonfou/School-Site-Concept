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

      let login = JSON.parse(localStorage.getItem("isLoggedIn"));

      if (login == true) {
        let data = JSON.parse(localStorage.getItem("arrayUsers"));

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

/*191, 171, 37 - gold
  107, 5, 4 - blood red
    0, 7, 92 - lighter blue

*/

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
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
