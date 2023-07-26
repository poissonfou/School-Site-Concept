<template>
  <section>
    <div>
      <div class="background-div-two"></div>
      <div class="background-div"></div>
      <img src="../../assets/img_one.jpg" alt="" />
    </div>
    <div class="text-box">
      <h1>The education your children deserve.</h1>
      <p>
        Make a part of an inovative and progressive school community that
        prepares your children to their full potential. Check out our
        <a @click="showInovations()">inovations</a> and
        <router-link to="enroll">enroll now!</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showInovations() {
      window.scrollTo(0, 700);
    },
  },
};
</script>

<style scoped>
section div {
  width: 1rem;
  margin: 0;
  margin-left: 5.5rem;
  padding: 0;
}

img {
  position: relative;
  z-index: 10;
  margin-top: -28rem;
  margin-left: 2rem;
  width: 20rem;
  height: 20rem;
  object-fit: cover;
  box-shadow: -5px -5px rgb(0, 7, 92);
}

.background-div {
  width: 20rem;
  height: 20rem;
  margin-top: 2.5rem;
  margin-left: 1rem;
  background-color: rgb(6, 15, 122);
}

h1 {
  color: rgb(6, 15, 122);
  font-size: 2.5rem;
}

p {
  font-size: 1.5rem;
}

.text-box {
  width: 23rem;
  margin-top: 4rem;
  margin-left: 6.5rem;
}

a {
  color: rgb(191, 171, 37);
}

.background-div-two {
  width: 20rem;
  height: 20rem;
  margin-top: -0.5rem;
  margin-left: 0rem;
  background-color: rgb(191, 171, 37);
  position: absolute;
  z-index: -2;
}

section {
  margin-left: 1rem;
}

@media (min-width: 576px) {
  section {
    margin-left: 4rem;
  }

  img {
    width: 25rem;
    height: 25rem;
  }

  .background-div-two {
    width: 25rem;
    height: 25rem;
  }

  .background-div {
    width: 25rem;
    height: 25rem;
  }

  h1 {
    font-size: 3rem;
    margin-left: 1rem;
  }

  .text-box {
    width: 44rem;
    margin-top: 4rem;
    margin-left: 0rem;
  }
}

@media (min-width: 768px) {
  section div {
    margin-left: 10rem;
  }

  img {
    width: 30rem;
    height: 25rem;
  }

  .background-div {
    width: 30rem;
    height: 25rem;
  }

  .background-div-two {
    width: 30rem;
    height: 25rem;
  }

  h1 {
    font-size: 3rem;
  }

  .text-box {
    width: 40rem;
    margin-left: 7rem;
  }
}

@media (min-width: 992px) {
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5.5rem;
    margin-left: 6rem;
    margin-top: 3rem;
  }

  .background-div-two {
    margin-top: 1.5rem;
  }

  section div {
    margin-left: -3rem;
  }

  h1 {
    margin-left: 7rem;
    width: 25rem;
  }

  p {
    width: 28rem;
    margin-left: 7rem;
  }
}

@media (min-width: 1200px) {
  section {
    margin-left: 6rem;
  }

  h1 {
    width: 30rem;
    font-size: 3.5rem;
    margin-left: 0rem;
    margin-top: 0rem;
  }

  p {
    width: 30rem;
    margin-left: 0rem;
    font-size: 2.5rem;
  }

  img {
    width: 35rem;
    height: 30rem;
    margin-top: -30rem;
  }

  .background-div {
    width: 35rem;
    height: 30rem;
  }

  .background-div-two {
    width: 35rem;
    height: 30rem;
  }
}
</style>
