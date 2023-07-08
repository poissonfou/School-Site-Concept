<template>
  <div class="base-card">
    <div class="img">
      <img :src="require(`../../assets/${url}`)" alt="" />
    </div>
    <div class="category">
      <a href="#">{{ link }}</a>
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
  width: 0;
}

img {
  width: 18.3rem;
  height: 15rem;
  object-fit: cover;
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

a {
  position: absolute;
  font-size: 1.5rem;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  color: white;
}

@media (min-width: 768px) {
  .category {
    margin-left: 11rem;
  }

  img {
    width: 30rem;
    height: 15rem;
    object-fit: cover;
  }
}

@media (min-width: 992px) {
  .category {
    margin-left: 5rem;
    margin-top: 10rem;
  }

  .base-card {
    padding-right: -8rem;
    width: 7rem;
  }

  img {
    width: 17rem;
    height: 23rem;
    object-fit: cover;
  }
}

@media (min-width: 1200px) {
  .category {
    margin-left: 4rem;
    margin-top: -2rem;
    width: 12rem;
  }

  a {
    font-size: 2rem;
    padding-top: 1.3rem;
    padding-left: 1.3rem;
  }

  img {
    width: 20rem;
    height: 30rem;
    object-fit: cover;
  }
}
</style>
