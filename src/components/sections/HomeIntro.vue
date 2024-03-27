<template>
  <section>
    <div>
      <img src="../../assets/img_one.jpg" alt="" />
      <div class="text-box">
        <h1>The education your children <span>deserve.</span></h1>
        <p>
          Make a part of an inovative and progressive school community that
          prepares your children to their full potential. Check out our
          <a @click="showInovations()">inovations</a> and
          <router-link to="enroll">enroll now!</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showInovations() {
      window.scrollTo(0, 700);
    },
    displayText() {
      let textBox = document.getElementsByClassName("text-box")[0];
      textBox.classList.add("display-text");
    },
  },
  mounted() {
    setTimeout(() => this.displayText(), 100);
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 40em;
  object-fit: cover;
}

h1 {
  color: rgb(6, 15, 122);
  font-size: 5rem;
  margin-bottom: 0;
}

p {
  color: white;
  font-size: 2.5rem;
}

.text-box {
  position: absolute;
  top: 80%;
  transition: 2s;
  padding: 0em 0.8em;
}

.display-text {
  transform: translateY(-40%);
  transition: 2s;
}

a,
span {
  color: rgb(191, 171, 37);
}

@media (max-height: 1400px) {
  .text-box {
    top: 40%;
  }
}

@media (max-height: 950px) {
  .text-box {
    top: 45%;
  }
}

@media (max-height: 750px) {
  .text-box {
    top: 60%;
  }
}

@media (max-width: 850px) {
  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }

  .display-text {
    transform: translateY(-15em);
    transition: 2s;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .display-text {
    transform: translateY(-10em);
    transition: 2s;
  }
}
</style>
