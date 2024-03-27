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
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 20rem;
  height: 28rem;
  object-fit: cover;
}

.category {
  position: absolute;
  z-index: 10;
  background-color: rgb(0, 7, 92);
  height: 3.5em;
  width: 10em;
  margin-top: 25em;
  padding-top: 1.5em;
  text-align: center;
}

a {
  padding-top: 5em;
  font-size: 1.5rem;
  color: white;
}

a:hover,
img:hover {
  cursor: pointer;
  color: rgb(191, 171, 37);
}

@media (max-width: 1000px) {
  img {
    width: 15rem;
    height: 23rem;
  }

  .category {
    margin-top: 20em;
  }
}

@media (max-width: 750px) {
  img {
    width: 13rem;
    height: 20rem;
  }

  .category {
    height: 3em;
    width: 8em;
    padding-top: 1.2em;
    margin-top: 17em;
  }

  a {
    font-size: 1.3rem;
  }
}

@media (max-width: 650px) {
  img {
    width: 28rem;
    height: 20rem;
  }

  .base-card {
    margin-bottom: 2em;
  }
}
</style>
