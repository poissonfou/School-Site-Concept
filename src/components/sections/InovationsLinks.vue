<template>
  <section>
    <base-card :url="imgs[0]" :link="links[0]"></base-card>
    <base-card :url="imgs[1]" :link="links[1]"> </base-card>
    <base-card :url="imgs[2]" :link="links[2]"> </base-card>
  </section>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";

export default {
  data() {
    return {
      imgs: ["robotics.jpg", "languages.jpeg", "ethics.jpg"],
      links: ["Tecnology", "Bilinguacy", "Ethics"],
    };
  },
  components: {
    BaseCard,
  },
  methods: {},
};
</script>

<style scoped>
section {
  margin-left: 1.1rem;
}

@media (min-width: 576px) {
  section {
    margin-left: 5rem;
  }
}

@media (min-width: 768px) {
  section {
    margin-left: 10rem;
  }
}

@media (min-width: 992px) {
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: -10rem;
    margin-bottom: 2rem;
    padding-left: 8.3rem;
    padding-right: 3rem;
    padding-top: 2rem;
  }
}

@media (min-width: 1200px) {
  section {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-left: -4.2rem;
  }
}
</style>
