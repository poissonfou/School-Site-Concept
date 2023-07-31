<template>
  <transition>
    <div>
      <HomeIntro />
      <InovationsLinks />
      <SliderComponent />
      <PricesSection />
      <SocialsLinks />
    </div>
  </transition>
</template>

<script>
import HomeIntro from "../sections/HomeIntro.vue";
import InovationsLinks from "../sections/InovationsLinks.vue";
import PricesSection from "../sections/PricesSection.vue";
import SocialsLinks from "../sections/SocialsLinks.vue";
import SliderComponent from "../sections/SliderComponent.vue";

export default {
  components: {
    HomeIntro,
    InovationsLinks,
    PricesSection,
    SocialsLinks,
    SliderComponent,
  },
};
</script>
