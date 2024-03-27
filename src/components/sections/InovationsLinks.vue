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
      links: ["Technology", "Bilinguacy", "Ethics"],
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
  display: flex;
  justify-content: space-around;
  padding: 3em 0em;
}

@media (max-width: 650px) {
  section {
    display: flex;
    flex-direction: column;
  }
}
</style>
