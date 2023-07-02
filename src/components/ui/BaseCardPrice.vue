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
}

.price-box {
  margin-left: 2rem;
}

p {
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
