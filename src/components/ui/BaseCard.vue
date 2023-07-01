<template>
  <div class="base-card">
    <div class="img">
      <slot></slot>
    </div>
    <div class="category">
      <slot name="desc"></slot>
    </div>
  </div>
</template>

<style scoped>
.base-card {
  margin-bottom: 1rem;
}

.img {
  height: 10rem;
}

.category {
  position: relative;
  z-index: 10;
  background-color: rgb(91, 150, 44);
  width: 8rem;
  height: 5rem;
  margin-left: 5rem;
  margin-top: 1rem;
}
</style>
