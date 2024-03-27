<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  position: absolute;
  box-shadow: 0px 0px 5px black;
  background-color: white;
  padding: 1em;
  color: green;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 3px;
  top: 8%;
  right: 42.5%;
  display: none;
  transition: 2s;
}

@media (max-width: 1000px) {
  div {
    right: 39%;
  }
}

@media (max-width: 675px) {
  div {
    right: 30%;
  }
}
</style>
