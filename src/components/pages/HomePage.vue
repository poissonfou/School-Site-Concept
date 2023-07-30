<template>
  <transition>
    <div>
      <FirstSection />
      <SecondSection />
      <SliderComponent />
      <ThirdSection />
      <FourthSection />
    </div>
  </transition>
</template>

<script>
import FirstSection from "../sections/FirstSection.vue";
import SecondSection from "../sections/SecondSection.vue";
import ThirdSection from "../sections/ThirdSection.vue";
import FourthSection from "../sections/FourthSection.vue";
import SliderComponent from "../sections/SliderComponent.vue";

export default {
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    SliderComponent,
  },
};
</script>
