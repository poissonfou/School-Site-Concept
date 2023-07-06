<template>
  <button>
    <slot></slot>
  </button>
</template>

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
</style>
