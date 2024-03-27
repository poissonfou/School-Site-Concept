<template>
  <transition>
    <div>
      <HomeIntro />
      <InovationsLinks />
      <SliderComponent />
      <PricesSection />
    </div>
  </transition>
</template>

<script>
import HomeIntro from "../sections/HomeIntro.vue";
import InovationsLinks from "../sections/InovationsLinks.vue";
import PricesSection from "../sections/PricesSection.vue";
import SliderComponent from "../sections/SliderComponent.vue";

export default {
  components: {
    HomeIntro,
    InovationsLinks,
    PricesSection,
    SliderComponent,
  },
};
</script>
