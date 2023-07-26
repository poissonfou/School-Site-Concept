<template>
  <div ref="enroll">
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
div {
  margin-top: 2rem;
  margin-left: 2.6rem;
}

@media (min-width: 576px) {
  div {
    margin-left: 3.7rem;
  }
}

@media (min-width: 992px) {
  div {
    margin-top: 7rem;
    margin-left: 4.4rem;
  }
}

@media (min-width: 1200px) {
  div {
    margin-top: 6rem;
    margin-left: 5.5rem;
  }
}
</style>
