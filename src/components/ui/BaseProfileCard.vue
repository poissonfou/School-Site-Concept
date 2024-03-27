<template>
  <div class="card">
    <div class="div-img">
      <img src="../../assets/profile.jpg" alt="" />
      <h2>{{ name }}</h2>
    </div>

    <div class="info">
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
  align-items: center;
  background-color: rgb(0, 7, 92);
  padding: 1.5em 2em;
  z-index: 1;
  box-shadow: -2px 6px 8px black;
  margin-left: 2rem;
}

.div-img {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 3em;
  height: 3em;
  margin-top: 0.5em;
  border-radius: 15rem;
  color: rgb(0, 7, 92);
}

h2 {
  color: white;
  border-bottom: black 1px solid;
  padding: 0em 1em;
}

p {
  font-size: 1.3rem;
  color: white;
}
</style>
