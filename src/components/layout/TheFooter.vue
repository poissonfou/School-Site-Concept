<template>
  <footer>
    <p>@SchoolName 2023</p>
    <p>All rights reserved</p>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  background-color: rgb(56, 187, 56);
}

p {
  color: white;
  margin-left: 5.5rem;
  margin-bottom: 0.3rem;
  margin-top: 0.6rem;
  width: 10rem;
}

@media (min-width: 768px) {
  p {
    margin-left: 18rem;
    font-size: 1.5rem;
    width: 15rem;
  }
}
</style>
