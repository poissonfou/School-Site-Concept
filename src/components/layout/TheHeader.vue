<template>
  <header>
    <nav>
      <i class="bi bi-list"></i>
      <ul>
        <li class="hidden prices"><a href="#">Prices</a></li>
        <li class="hidden enroll" id="enroll"><a href="#">Enroll</a></li>
        <li class="hidden contact" id="contact"><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.hidden {
  display: none;
}

i {
  font-size: 3rem;
  position: absolute;
  padding-left: 0.5rem;
  color: white;
}

header {
  background-color: rgb(56, 187, 56);
  height: 3.5rem;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  cursor: pointer;
}
</style>
