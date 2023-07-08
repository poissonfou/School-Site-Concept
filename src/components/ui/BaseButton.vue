<template>
  <button>
    <p>{{ innerText }}</p>
  </button>
</template>

<script>
export default {
  props: ["innerText"],
};
</script>

<style scoped>
button {
  background-color: rgb(91, 150, 44);
  border-radius: 0.5rem;
  border: none;
  width: 10rem;
  height: 4rem;
  margin-left: 5rem;
}

button:hover {
  cursor: pointer;
}

p {
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
}

@media (min-width: 768px) {
  button {
    margin-top: 3.5rem;
    margin-left: 38rem;
    width: 10rem;
    position: absolute;
  }

  p {
    color: white;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
}

@media (min-width: 992px) {
  button {
    margin-left: 47rem;
    width: 12rem;
    height: 5rem;
    position: absolute;
  }

  p {
    font-weight: bold;
  }
}

@media (min-width: 1200px) {
  button {
    margin-left: 59rem;
    margin-top: 4.3rem;
    width: 15rem;
    height: 6rem;
    position: absolute;
  }

  p {
    padding-top: 0.8rem;
    font-size: 2rem;
  }
}

@media (min-width: 1300px) {
  button {
    margin-top: 4rem;
    width: 13rem;
    height: 4rem;
  }

  p {
    color: white;
    font-size: 1.7rem;
    margin-top: 0.2rem;
    font-weight: normal;
  }
}
</style>
