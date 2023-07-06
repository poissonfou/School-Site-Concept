<template>
  <div>
    <base-card-price>
      <img src="../../assets/kindergarden.jpg" alt="" />
      <template v-slot:desc>
        <h1 class="title">Kindergarden</h1>
        <h1 class="price">1.013<span>,91/month</span></h1>
      </template>
    </base-card-price>
    <base-card-price>
      <img src="../../assets/k-12.jpg" alt="" />
      <template v-slot:desc>
        <h1 class="title k-12">K-12</h1>
        <h1 class="price">1.103<span>,91/month</span></h1>
      </template>
    </base-card-price>
    <base-card-price>
      <img src="../../assets/highschool.jpg" alt="" />
      <template v-slot:desc>
        <h1 class="title highschool">Highschool</h1>
        <h1 class="price">1.230<span>,91/month</span></h1>
      </template>
    </base-card-price>
  </div>
</template>

<script>
import BaseCardPrice from "../ui/BaseCardPrice.vue";

export default {
  components: {
    BaseCardPrice,
  },
};
</script>

<style scoped>
div {
  margin-top: 2rem;
}

img {
  width: 19.94rem;
  height: 8rem;
  object-fit: cover;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.k-12 {
  margin-left: 5.5rem;
}

.highschool {
  margin-left: 2rem;
}

.price {
  font-size: 2.3rem;
  color: rgb(214, 214, 40);
  margin-top: 0;
  padding-left: 3rem;
}

span {
  font-size: 1rem;
  color: gray;
}

@media (min-width: 768px) {
  img {
    width: 19.94rem;
    height: 10.2rem;
    object-fit: cover;
    margin-left: 0rem;
  }

  .title {
    font-size: 2.3rem;
  }

  .k-12 {
    margin-left: 5.5rem;
  }

  .highschool {
    margin-left: 1.3rem;
  }

  .price {
    font-size: 2.5rem;
    color: rgb(214, 214, 40);
    margin-top: 0;
    padding-left: 2rem;
  }
}
</style>
