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
      ><p>APPLY NOW</p></base-button
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
  width: 25rem;
  height: 23.5rem;
  margin-top: 0;
  border: solid 0.1rem rgb(0, 7, 92);
}

.price-box {
  margin-left: 4rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  color: rgb(0, 7, 92);
}

.price {
  font-size: 2.3rem;
  color: rgb(214, 214, 40);
  padding-left: 3rem;
}

img {
  width: 25rem;
  height: 8rem;
  object-fit: cover;
}

span {
  font-size: 1rem;
  color: gray;
}

p {
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
}

p:hover {
  color: rgb(211, 198, 111);
}

.button {
  margin-left: 7.7rem;
}

@media (min-width: 576px) {
  .price-card {
    width: 33rem;
    height: 24rem;
  }

  img {
    width: 33rem;
    height: 9rem;
  }

  .price-box {
    margin-left: 8rem;
  }

  .button {
    margin-left: 11.5rem;
  }
}

@media (min-width: 768px) {
  .price-card {
    display: flex;
    flex-direction: row;
    box-shadow: -5px 5px 10px black;
    width: 50rem;
    border-radius: 0.5rem;
    border: none;
    margin-left: 2rem;
    margin-bottom: 1rem;
    height: 10.2rem;
  }

  img {
    width: 19.94rem;
    height: 10.2rem;
    object-fit: cover;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .title {
    font-size: 2.3rem;
  }

  .price {
    font-size: 2.5rem;
    color: rgb(214, 214, 40);
    margin-top: 0;
    padding-left: 2rem;
  }

  p {
    color: white;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .button {
    width: 9rem;
    height: 3.5rem;
    margin-left: 40rem;
  }

  .price-box {
    margin-left: 3rem;
  }
}

@media (min-width: 992px) {
  .price-card {
    width: 62rem;
    height: 12rem;
    margin-bottom: 2rem;
  }

  img {
    width: 22rem;
    height: 12rem;
  }

  .title {
    font-size: 3rem;
  }

  .price {
    font-size: 3rem;
    padding-left: 5rem;
  }

  p {
    font-weight: bold;
  }

  .button {
    margin-left: 50rem;
    margin-top: 4rem;
    height: 4rem;
    width: 10rem;
  }
}

@media (min-width: 1200px) {
  .price-card {
    width: 70rem;
    height: 10rem;
    margin-top: 2rem;
    border-radius: 0.7rem;
  }

  img {
    width: 28rem;
    height: 10rem;
  }

  .title {
    font-size: 2.7rem;
    margin-left: 5rem;
  }

  .price {
    font-size: 2.7rem;
    padding-left: 8rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 1rem;
  }

  .button {
    margin-left: 57rem;
    margin-top: 3rem;
  }
}
</style>
