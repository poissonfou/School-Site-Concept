<template>
  <section>
    <base-card>
      <img src="../../assets/robotics.jpg" alt="" />
      <template v-slot:desc>
        <a href="#">Tecnology</a>
      </template>
    </base-card>
    <base-card>
      <img src="../../assets/languages.jpeg" alt="" />
      <template v-slot:desc>
        <a href="#">Bilinguacy</a>
      </template>
    </base-card>
    <base-card>
      <img src="../../assets/ethics.jpg" alt="" />
      <template v-slot:desc>
        <a href="#" class="ethics">Ethics</a>
      </template>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  methods: {},
};
</script>

<style scoped>
section {
  margin-left: 2.3rem;
}

img {
  width: 18.3rem;
  height: 15rem;
  object-fit: cover;
}

.ethics {
  margin-left: 1.3rem;
}

a {
  position: absolute;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  color: white;
}
</style>
