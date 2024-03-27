<template>
  <div ref="enroll" class="price-cars-component">
    <base-card-price
      :urlPrice="urls[0]"
      :cardTitle="title[0]"
      :mainPrice="price[0]"
      :cents="cents"
    >
    </base-card-price>
    <base-card-price
      :urlPrice="urls[1]"
      :cardTitle="title[1]"
      :mainPrice="price[1]"
      :cents="cents"
    >
    </base-card-price>
    <base-card-price
      :urlPrice="urls[2]"
      :cardTitle="title[2]"
      :mainPrice="price[2]"
      :cents="cents"
    >
    </base-card-price>
  </div>
</template>

<script>
import BaseCardPrice from "../ui/BaseCardPrice.vue";

export default {
  data() {
    return {
      urls: ["kindergarden.jpg", "k-12.jpg", "highschool.jpg"],
      title: ["Kindergarden", "K-12", "Highschool"],
      price: ["1.013", "1.103", "1.230"],
      cents: ",91/month",
      ref_id: "enroll",
    };
  },
  components: {
    BaseCardPrice,
  },
};
</script>

<style scoped>
.price-cars-component {
  display: flex;
  padding: 5em 0em;
  justify-content: space-around;
}

@media (max-width: 750px) {
  .price-cars-component {
    display: flex;
    flex-direction: column;
    padding: 5em 4em;
  }
}
</style>
