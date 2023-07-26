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
  height: 4rem;
  background-color: rgb(0, 7, 92);
}

p {
  color: white;
  margin-left: 13rem;
  margin-bottom: 0.3rem;
  margin-top: 0.6rem;
  width: 10rem;
}

footer p:nth-child(2) {
  margin-left: 13.7rem;
}

@media (min-width: 576px) {
  footer {
    display: flex;
    flex-direction: row;
    height: 4rem;
    background-color: rgb(0, 7, 92);
  }

  p {
    margin-left: 14rem;
    margin-top: 1.5rem;
  }

  footer p:nth-child(2) {
    margin-left: 1rem;
  }
}

@media (min-width: 768px) {
  p {
    margin-left: 18rem;
    font-size: 1.5rem;
    width: 15rem;
  }
}

@media (min-width: 992px) {
  p {
    margin-left: 23rem;
    font-size: 1.6rem;
    width: 15rem;
  }
}

@media (min-width: 1200px) {
  p {
    margin-left: 32rem;
    font-size: 1.7rem;
    width: 16rem;
  }
}

@media (min-width: 1300px) {
  p {
    margin-left: 30rem;
    margin-top: 1rem;
    font-size: 1rem;
  }

  footer p:nth-child(2) {
    margin-left: -5rem;
  }
}
</style>
