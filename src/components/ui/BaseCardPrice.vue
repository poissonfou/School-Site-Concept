<template>
  <div class="price-card">
    <div><img :src="require(`../../assets/${urlPrice}`)" alt="" /></div>
    <div class="price-box">
      <h1 class="title">{{ cardTitle }}</h1>
      <h1 class="price">
        {{ mainPrice }}<span>{{ cents }}</span>
      </h1>
    </div>
    <base-button :innerText="buttonText"> </base-button>
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
};
</script>

<style scoped>
.price-card {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  margin-bottom: 1rem;
  width: 20rem;
}

.price-box {
  margin-left: 2rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.price {
  font-size: 2.3rem;
  color: rgb(214, 214, 40);
  margin-top: 0;
  padding-left: 3rem;
}

img {
  width: 19.94rem;
  height: 8rem;
  object-fit: cover;
}

span {
  font-size: 1rem;
  color: gray;
}

@media (min-width: 768px) {
  .price-card {
    display: flex;
    flex-direction: row;
    box-shadow: -5px 5px 10px black;
    width: 50rem;
    border-radius: 0rem;
    margin-left: 0.5rem;
    height: 10.2rem;
  }

  img {
    width: 19.94rem;
    height: 10.2rem;
    object-fit: cover;
    margin-left: 0rem;
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
}

@media (min-width: 992px) {
  .price-card {
    width: 62rem;
    height: 12rem;
  }

  img {
    width: 22rem;
    height: 12rem;
    object-fit: cover;
    margin-left: 0rem;
  }

  .title {
    font-size: 3rem;
  }

  .price {
    font-size: 3rem;
    padding-left: 5rem;
  }
}

@media (min-width: 1200px) {
  .price-card {
    width: 77rem;
    height: 15rem;
  }

  img {
    width: 28rem;
    height: 15rem;
  }

  .title {
    font-size: 4rem;
  }

  .price {
    font-size: 4rem;
    padding-left: 6rem;
  }
}

@media (min-width: 1300px) {
  .price-card {
    width: 75rem;
    height: 12rem;
    margin-top: 2rem;
  }

  img {
    width: 28rem;
    height: 12rem;
  }

  .title {
    font-size: 2.7rem;
    margin-left: 5rem;
  }

  .price {
    font-size: 2.7rem;
    padding-left: 8rem;
  }
}
</style>
