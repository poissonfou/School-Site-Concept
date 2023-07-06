<template>
  <section>
    <div>
      <div class="background-div"></div>
      <img src="../../assets/img_one.jpg" alt="" />
    </div>
    <div class="text-box">
      <h1>The education your children deserve.</h1>
      <p>
        Make a part of an inovative and progressive school community that
        prepares your children to their full potential. Check out our
        <a href="#">inovations</a> and <a href="#">enroll</a> now!
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import "../../styles/responsive768.css";
/* section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */
section div {
  width: 1rem;
  margin: 0;
  margin-left: 1rem;
  padding: 0;
}

img {
  position: relative;
  z-index: 10;
  margin-top: -28rem;
  margin-left: 2rem;
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  box-shadow: -5px -5px rgb(91, 150, 44);
}

.background-div {
  width: 15rem;
  height: 15rem;
  margin-top: 2.5rem;
  margin-left: 1rem;
  background-color: rgb(56, 187, 56);
}

h1 {
  color: gray;
  font-size: 2rem;
}

p {
  font-size: 1.5rem;
}

.text-box {
  width: 17.8rem;
  margin-top: 4rem;
  margin-left: 1.5rem;
}

a {
  color: rgb(56, 187, 56);
}

@media (min-width: 768px) {
  section div {
    width: 1rem;
    margin: 0;
    margin-left: 3rem;
    padding: 0;
  }

  img {
    position: relative;
    z-index: 10;
    margin-top: -28rem;
    margin-left: 7rem;
    width: 30rem;
    height: 25rem;
    object-fit: cover;
    box-shadow: -5px -5px rgb(91, 150, 44);
  }

  .background-div {
    width: 30rem;
    height: 25rem;
    margin-top: 2.5rem;
    margin-left: 6rem;
    background-color: rgb(56, 187, 56);
  }

  h1 {
    color: gray;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  .text-box {
    width: 35rem;
    margin-top: 4rem;
    margin-left: 9rem;
  }

  a {
    color: rgb(56, 187, 56);
  }
}
</style>
