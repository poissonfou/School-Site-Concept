<template>
  <div class="base-card">
    <div class="img">
      <img :src="require(`../../assets/${url}`)" alt="" />
    </div>
    <div class="category">
      <router-link to="innovations" class="link">{{ link }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "link"],
};
</script>

<style scoped>
.base-card {
  margin-bottom: 1rem;
  margin-left: 4.3rem;
}

img {
  width: 25rem;
  height: 15rem;
  object-fit: cover;
}

.category {
  position: relative;
  z-index: 10;
  background-color: rgb(0, 7, 92);
  width: 8rem;
  height: 5rem;
  margin-left: 8.5rem;
  margin-top: -2rem;
}

a {
  position: absolute;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  color: white;
}

a:hover {
  color: rgb(191, 171, 37);
}

@media (min-width: 576px) {
  img {
    width: 28rem;
  }

  .category {
    margin-left: 10.2rem;
  }
}

@media (min-width: 768px) {
  .category {
    margin-left: 13rem;
  }

  img {
    width: 35rem;
  }
}

@media (min-width: 992px) {
  .category {
    margin-left: 5rem;
    margin-top: -2rem;
  }

  img {
    width: 17rem;
    height: 23rem;
  }
}

@media (min-width: 1200px) {
  .category {
    margin-left: 4rem;
    margin-top: -2rem;
    position: absolute;
    width: 12rem;
  }

  a {
    font-size: 2rem;
    padding-top: 1.3rem;
    padding-left: 1.3rem;
  }

  img {
    width: 20rem;
    height: 25rem;
  }
}
</style>
