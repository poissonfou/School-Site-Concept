<template>
  <div>
    <TheHeader />
    <FirstSection />
    <SecondSection />
    <SliderComponent />
    <ThirdSection />
    <FourthSection />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import FirstSection from "./components/sections/FirstSection.vue";
import SecondSection from "./components/sections/SecondSection.vue";
import ThirdSection from "./components/sections/ThirdSection.vue";
import FourthSection from "./components/sections/FourthSection.vue";
import SliderComponent from "./components/sections/SliderComponent.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    SliderComponent,
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

a:hover {
  cursor: pointer;
}
</style>
