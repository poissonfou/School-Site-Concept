<template>
  <div>
    <img :src="require(`../../assets/${icon}`)" alt="" />
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["icon", "name"],
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

img {
  width: 4rem;
  margin-left: 8rem;
}

p {
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 7rem;
}

a {
  color: black;
}

@media (min-width: 576px) {
  img {
    width: 5rem;
    margin-left: 8rem;
  }

  p {
    font-size: 1.8rem;
    margin-left: 8rem;
  }
}

@media (min-width: 768px) {
  img {
    width: 4rem;
    margin-left: 5rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    margin-left: 4rem;
  }
}

@media (min-width: 992px) {
  img {
    width: 5rem;
    margin-left: 5rem;
  }

  p {
    margin-left: 5.7rem;
    font-size: 1.8rem;
  }
}

@media (min-width: 1200px) {
  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    margin-left: 3rem;
    width: 10rem;
  }
}
</style>
