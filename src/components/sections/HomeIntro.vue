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
  color: rgb(6, 15, 122);
  font-size: 2rem;
}

.text-box {
  position: absolute;
  top: 90%;
  transition: 2s;
  padding: 0em 0.8em;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 48%,
    rgba(0, 0, 0, 0) 100%
  );
}

.display-text {
  transform: translateY(-30%);
  transition: 2s;
  height: 30em;
}

a,
span {
  color: rgb(191, 171, 37);
}

@media (max-height: 1400px) {
  .text-box {
    top: 38%;
  }
}

@media (max-height: 1200px) {
  .text-box {
    top: 45%;
  }
}

@media (max-height: 950px) {
  .text-box {
    top: 55%;
  }
}

@media (max-height: 750px) {
  .text-box {
    top: 65%;
  }
}

@media (max-width: 850px) {
  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>
