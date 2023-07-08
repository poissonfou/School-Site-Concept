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

@media (min-width: 992px) {
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5.5rem;
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
    display: flex;
    flex-direction: row;
  }

  section div {
    margin-left: 0rem;
  }

  h1 {
    width: 30rem;
    font-size: 3rem;
    margin-left: 0rem;
    margin-top: 0rem;
  }

  p {
    width: 29rem;
    margin-left: 0rem;
    font-size: 2.5rem;
  }

  img {
    width: 35rem;
    height: 30rem;
  }

  .background-div {
    width: 35rem;
    height: 30rem;
  }
}
</style>
