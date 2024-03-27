<template>
  <div class="price-card">
    <div><img :src="require(`../../assets/${urlPrice}`)" alt="" /></div>
    <div class="price-box">
      <h1 class="title">{{ cardTitle }}</h1>
      <h1 class="price">
        {{ mainPrice }}<span>{{ cents }}</span>
      </h1>
    </div>
    <base-button @click="directToEnroll()" class="button"
      >APPLY NOW</base-button
    >
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  props: ["urlPrice", "cardTitle", "mainPrice", "cents"],
  data() {
    return {
      buttonText: "APPLY NOW",
    };
  },
  components: {
    BaseButton,
  },
  methods: {
    directToEnroll() {
      this.$router.push("/enroll");
    },
  },
};
</script>

<style scoped>
.price-card {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 5px 4px 15px black;
  align-items: center;
}

.price-box {
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: rgb(0, 7, 92);
}

.price {
  font-size: 2.3rem;
  color: rgb(214, 214, 40);
}

img {
  width: 25rem;
  height: 9rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  object-fit: cover;
}

span {
  font-size: 1rem;
  color: gray;
}

button {
  padding: 1em 2em;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 2em;
}

@media (max-width: 1200px) {
  img {
    width: 20rem;
  }
}

@media (max-width: 1000px) {
  img {
    width: 15rem;
  }
}

@media (max-width: 750px) {
  img {
    width: 100%;
  }

  .price-card div:first-child {
    width: 100%;
  }

  .price-card {
    margin-bottom: 3em;
  }
}
</style>
