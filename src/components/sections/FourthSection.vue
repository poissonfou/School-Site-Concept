<template>
  <div>
    <h1>Contact and Follow Us</h1>
    <h2>(56)153486245</h2>
    <base-social>
      <a href="#"><i class="bi bi-envelope-at"></i></a>
      <p>Email</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-instagram"></i></a>
      <p>Instagram</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-facebook"></i></a>
      <p>Facebook</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-twitter"></i></a>
      <p>Twitter</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-tiktok"></i></a>
      <p>Tik Tok</p>
    </base-social>
  </div>
</template>

<script>
import BaseSocial from "../ui/BaseSocial.vue";

export default {
  components: BaseSocial,
};
</script>

<style scoped>
h1 {
  color: gray;
  margin-left: 0.5rem;
  margin-bottom: 0;
}

h2 {
  color: gray;
  margin-left: 5rem;
  margin-top: 0.5rem;
}

i {
  font-size: 5rem;
  margin-bottom: 0;
  margin-left: 6.5rem;
}

p {
  font-size: 1.8rem;
  margin-top: 0;
  margin-left: 5rem;
}

a {
  color: black;
}
</style>
