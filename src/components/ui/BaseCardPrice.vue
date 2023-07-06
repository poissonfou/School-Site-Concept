<template>
  <div class="price-card">
    <div>
      <slot></slot>
    </div>
    <div class="price-box">
      <slot name="desc"> </slot>
    </div>
    <base-button>
      <p>APPLY NOW</p>
    </base-button>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
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

p {
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  .price-card {
    display: flex;
    flex-direction: row;
    box-shadow: -5px 5px 15px black;
    width: 50rem;
    border-radius: 0rem;
    margin-left: 0.5rem;
    height: 10.2rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
}
</style>
