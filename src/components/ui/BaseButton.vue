<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: rgb(0, 7, 92);
  border-radius: 0.5rem;
  border: none;
  width: 10rem;
  height: 4rem;
  margin-left: 5rem;
}

button:hover {
  cursor: pointer;
}

@media (min-width: 768px) {
  button {
    margin-top: 3.5rem;
    margin-left: 38rem;
    width: 10rem;
    position: absolute;
  }
}

@media (min-width: 992px) {
  button {
    margin-left: 47rem;
    width: 12rem;
    height: 5rem;
    position: absolute;
  }
}

@media (min-width: 1200px) {
  button {
    margin-left: 55rem;
    margin-top: 4.3rem;
    width: 15rem;
    height: 6rem;
    position: absolute;
  }
}

@media (min-width: 1300px) {
  button {
    margin-top: 3rem;
    margin-left: 56rem;
    width: 10rem;
    height: 4rem;
  }
}
</style>
