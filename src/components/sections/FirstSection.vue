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
/* section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */

section div {
  width: 18rem;
  margin: 0;
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
  margin-left: 0.5rem;
}
</style>
