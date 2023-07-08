<template>
  <div>
    <a href="#">
      <img :src="require(`../../assets/${icon}`)" alt="" />
    </a>
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
  width: 5rem;
  margin-bottom: 0;
  margin-left: 7rem;
}

img:hover {
  color: gray;
  transition: 0.3s all ease;
}

p {
  font-size: 1.8rem;
  margin-top: 0;
  margin-left: 5.5rem;
}

a {
  color: black;
}

@media (min-width: 768px) {
  img {
    width: 4rem;
    margin-bottom: 0;
    margin-left: 4rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    margin-left: 5rem;
  }
}

@media (min-width: 992px) {
  img {
    width: 5.2rem;
  }

  p {
    margin-left: 5.7rem;
  }
}

@media (min-width: 1200px) {
  p {
    margin-left: 5rem;
    font-size: 2rem;
  }
}

@media (min-width: 1300px) {
  img {
    width: 4rem;
    height: 4rem;
  }

  p {
    margin-left: 5rem;
    font-size: 1.5rem;
  }
}
</style>
