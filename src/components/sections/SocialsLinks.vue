<template>
  <div class="main-div">
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
  color: rgb(0, 7, 92);
  margin-left: 9.5rem;
  font-size: 1.7rem;
  margin-bottom: 0;
}

h2 {
  color: black;
  margin-left: 12rem;
  font-size: 1.5rem;
}

.social-links {
  margin-bottom: 2rem;
  margin-left: 8rem;
}

@media (min-width: 576px) {
  h3 {
    margin-left: 11rem;
    font-size: 2.5rem;
  }

  h2 {
    margin-left: 18rem;
    font-size: 1.7rem;
  }

  .social-links {
    margin-left: 13.6rem;
  }
}

@media (min-width: 768px) {
  .social-links {
    display: flex;
    flex-direction: row;
    margin-left: 4rem;
    margin-top: 3rem;
  }

  h3 {
    margin-left: 17rem;
    font-size: 3rem;
    width: 30rem;
  }

  h2 {
    margin-left: 25rem;
    margin-top: 0.5rem;
    font-size: 1.8rem;
  }
}

@media (min-width: 992px) {
  h3 {
    margin-left: 22rem;
    font-size: 3rem;
  }

  h2 {
    margin-left: 29rem;
    font-size: 2.2rem;
  }

  .social-links {
    margin-top: 4.5rem;
    margin-bottom: 2rem;
    margin-left: 5.5rem;
  }
}

@media (min-width: 1200px) {
  h3 {
    margin-left: 26rem;
    font-size: 3rem;
    width: 40rem;
  }

  h2 {
    margin-left: 33rem;
    font-size: 2rem;
  }

  .main-div {
    margin-top: 5rem;
  }

  .social-links {
    margin-top: 5rem;
    margin-left: 9rem;
  }
}
</style>
