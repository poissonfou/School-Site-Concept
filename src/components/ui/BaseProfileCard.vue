<template>
  <div class="card">
    <div class="div-img">
      <i class="bi bi-person"></i>
    </div>

    <div class="info">
      <h2>{{ name }}</h2>
      <p>{{ grade }}</p>
      <p>{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "name", "grade", "email"],
};
</script>

<style scoped>
.card {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 7, 92);
  height: 15rem;
  width: 13rem;
  z-index: 1;
  box-shadow: 0px 0px 5px black;
  margin-left: 2rem;
}

.info {
  display: flex;
  flex-direction: column;
}

i {
  font-size: 5rem;
  border-radius: 15rem;
  margin-left: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: rgb(56, 187, 56);
}

h2 {
  margin-bottom: 0rem;
  margin-top: 0.5rem;
  color: rgb(56, 187, 56);
  margin-left: 3.5rem;
  width: 10rem;
}

p {
  margin-left: 3.3rem;
  font-size: 1.3rem;
  margin-top: 0.5rem;
}

.info p:nth-child(3) {
  margin-left: 1.5rem;
  font-size: 1.02rem;
  margin-top: 0rem;
}

.div-img {
  border-bottom: solid 0.1rem rgb(56, 187, 56);
  width: 10rem;
  margin-left: 1.3rem;
}
</style>
