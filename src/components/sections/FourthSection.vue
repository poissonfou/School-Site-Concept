<template>
  <div>
    <h1>Contact and Follow Us</h1>
    <h2>(56)153486245</h2>
    <base-social>
      <a href="#"><i class="bi bi-envelope-at"></i></a>
      <p class="email">Email</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-instagram"></i></a>
      <p>Instagram</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-facebook"></i></a>
      <p class="facebook">Facebook</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-twitter"></i></a>
      <p class="twitter">Twitter</p>
    </base-social>
    <base-social>
      <a href="#"><i class="bi bi-tiktok"></i></a>
      <p class="tiktok">Tik Tok</p>
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
  margin-left: 1.5rem;
  margin-bottom: 0;
}

h2 {
  color: gray;
  margin-left: 6rem;
  margin-top: 0.5rem;
}

i {
  font-size: 5rem;
  margin-bottom: 0;
  margin-left: 9rem;
}

p {
  font-size: 1.8rem;
  margin-top: 0;
  margin-left: 7.3rem;
}

a {
  color: black;
}

.email {
  margin-left: 9.3rem;
}

.facebook {
  margin-left: 7.6rem;
}

.twitter {
  margin-left: 8.5rem;
}

.tiktok {
  margin-left: 8.5rem;
}
</style>
