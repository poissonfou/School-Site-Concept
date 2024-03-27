<template>
  <footer>
    <div class="main-div">
      <div>
        <p>Contact and Follow Us</p>
        <p>(56)153486245</p>
      </div>
      <div class="social-links">
        <base-social :icon="icons[0]"></base-social>
        <base-social :icon="icons[1]"></base-social>
        <base-social :icon="icons[2]"></base-social>
        <base-social :icon="icons[3]"></base-social>
        <base-social :icon="icons[4]"></base-social>
      </div>
    </div>
    <div class="credit">
      <p>@SchoolName 2023</p>
      <p>All rights reserved</p>
    </div>
  </footer>
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
    };
  },
  components: {
    BaseSocial,
  },
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 7, 92);
  align-items: center;
}

.main-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-div div p:first-child {
  margin-left: -1.5em;
}

.social-links {
  display: flex;
}

.credit {
  display: flex;
  padding: 0.5em 0.5em;
  justify-content: space-around;
}

.credit p {
  margin-left: 0.5em;
}

p {
  color: white;
}
</style>
