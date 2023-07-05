<template>
  <div>
    <h3>Contact and Follow Us</h3>
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
h3 {
  color: gray;
  margin-left: 2.5rem;
  margin-bottom: 0;
  font-size: 1.5rem;
}

h2 {
  color: gray;
  margin-left: 4rem;
  margin-top: 0.5rem;
}

div {
  width: 21rem;
  margin: 0;
}

i {
  font-size: 5rem;
  margin-bottom: 0;
  margin-left: 7rem;
}

p {
  font-size: 1.8rem;
  margin-top: 0;
  margin-left: 5.5rem;
}

a {
  color: black;
}

.email {
  margin-left: 7.4rem;
}

.facebook {
  margin-left: 5.8rem;
}

.twitter {
  margin-left: 6.6rem;
}

.tiktok {
  margin-left: 6.5rem;
}
</style>
