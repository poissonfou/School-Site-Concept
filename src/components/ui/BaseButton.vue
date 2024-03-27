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
}

button:hover {
  cursor: pointer;
}
</style>
