<template>
  <div>
    <h3>Contact and Follow Us</h3>
    <h2>(56)153486245</h2>
    <div class="social-links">
      <base-social :icon="icons[0]" :name="caps[0]"></base-social>
      <base-social :icon="icons[1]" :name="caps[1]"></base-social>
      <base-social :icon="icons[2]" :name="caps[2]"></base-social>
      <base-social :icon="icons[3]" :name="caps[3]"></base-social>
      <base-social :icon="icons[4]" :name="caps[4]"></base-social>
    </div>
  </div>
</template>

<script>
import BaseSocial from "../ui/BaseSocial.vue";

export default {
  data() {
    return {
      icons: [
        "envelope-at.svg",
        "instagram.svg",
        "facebook.svg",
        "twitter.svg",
        "tiktok.svg",
      ],
      caps: ["Email", "Instagram", "Facebook", "Twitter", "Tik Tok"],
    };
  },
  components: {
    BaseSocial,
  },
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

.social-links {
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .social-links {
    display: flex;
    flex-direction: row;
  }

  i {
    font-size: 4rem;
    margin-bottom: 0;
    margin-left: 4rem;
  }

  .bi-instagram {
    padding-left: 2.3rem;
  }

  .bi-facebook {
    padding-left: 2.9rem;
  }

  .bi-twitter {
    padding-left: 2.8rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 0;
    margin-left: 5rem;
  }

  .email {
    margin-left: 4rem;
  }

  .facebook {
    margin-left: 5.8rem;
  }

  .twitter {
    margin-left: 6.6rem;
  }

  .tiktok {
    margin-left: 3.5rem;
    width: 5rem;
  }

  base-social {
    width: 10rem;
  }

  h3 {
    margin-left: 13rem;
    font-size: 2.5rem;
    width: 30rem;
  }

  h2 {
    margin-left: 18rem;
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }
}

@media (min-width: 992px) {
  h3 {
    margin-left: 16rem;
    font-size: 3rem;
  }

  h2 {
    margin-left: 22.5rem;
    font-size: 2.3rem;
  }

  i {
    font-size: 5.2rem;
  }

  p {
    margin-left: 5.7rem;
  }

  .social-links {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  .email {
    margin-left: 4.7rem;
  }

  .facebook {
    margin-left: 6.5rem;
  }

  .twitter {
    margin-left: 6.7rem;
  }

  .tiktok {
    margin-left: 6.5 rem;
  }

  base-social {
    width: 12rem;
  }
}

@media (min-width: 1200px) {
  div {
    margin-top: 6rem;
    margin-bottom: 5rem;
  }

  h3 {
    margin-left: 20rem;
    font-size: 4rem;
    width: 40rem;
  }

  h2 {
    margin-left: 29.5rem;
    font-size: 2.5rem;
  }

  p {
    margin-left: 5rem;
    font-size: 2rem;
  }

  .social-links {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
    margin-left: 12rem;
  }

  .email {
    margin-left: 4.2rem;
  }

  .facebook {
    margin-left: 5.5rem;
  }

  .twitter {
    margin-left: 6rem;
  }

  .tiktok {
    margin-left: 3rem;
    width: 10rem;
  }

  base-social {
    width: 12rem;
  }
}

@media (min-width: 1300px) {
  h3 {
    margin-left: 26rem;
    font-size: 3rem;
    width: 40rem;
  }

  h2 {
    margin-left: 33rem;
    font-size: 2rem;
  }

  i {
    font-size: 4rem;
  }

  p {
    margin-left: 5rem;
    font-size: 1.5rem;
  }

  .social-links {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
    margin-left: 12rem;
  }

  .bi-tiktok {
    margin-left: 7rem;
  }

  .tiktok {
    margin-left: 6rem;
    width: 10rem;
  }
}
</style>
