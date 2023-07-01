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
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  position: relative;
  z-index: 10;
  margin-top: -28rem;
  margin-left: 5rem;
  width: 28rem;
  height: 28rem;
  object-fit: cover;
  box-shadow: -5px -5px rgb(91, 150, 44);
}

.background-div {
  width: 28rem;
  height: 28rem;
  margin-top: 2.5rem;
  margin-left: 4rem;
  background-color: rgb(56, 187, 56);
}

h1 {
  font-size: 3rem;
  color: gray;
}

p {
  font-size: 1.5rem;
}

.text-box {
  width: 40rem;
  margin-right: 2.5rem;
  margin-top: 4rem;
}
</style>
