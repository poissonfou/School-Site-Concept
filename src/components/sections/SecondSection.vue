<template>
  <section>
    <base-card>
      <img src="../../assets/robotics.jpg" alt="" />
      <template v-slot:desc>
        <a href="">Tecnology</a>
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
        <a href="#">Ethics</a>
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
};
</script>

<style scoped>
img {
  width: 18.3rem;
  height: 15rem;
  object-fit: cover;
}

a {
  position: absolute;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  color: white;
}
</style>
