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
  margin-left: 0.7rem;
}

img {
  width: 18.3rem;
  height: 15rem;
  object-fit: cover;
}

.ethics {
  margin-left: 1.3rem;
}

@media (min-width: 768px) {
  section {
    margin-left: 10rem;
  }

  img {
    width: 30rem;
    height: 15rem;
    object-fit: cover;
  }
}

@media (min-width: 992px) {
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: -10rem;
    margin-bottom: 7rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
  }

  img {
    width: 17rem;
    height: 23rem;
    object-fit: cover;
  }
}

@media (min-width: 1200px) {
  section {
    margin-left: -13rem;
  }

  img {
    width: 20rem;
    height: 30rem;
    object-fit: cover;
  }
}
</style>
