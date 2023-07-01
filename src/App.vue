<template>
  <div>
    <TheHeader />
    <FirstSection />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import FirstSection from "./components/sections/FirstSection.vue";
export default {
  components: {
    TheHeader,
    FirstSection,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto";
}

a {
  text-decoration: none;
}
</style>
