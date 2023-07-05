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
  margin-left: 6.8rem;
}

button:hover {
  cursor: pointer;
}
</style>
