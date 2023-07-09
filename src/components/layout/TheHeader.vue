<template>
  <header>
    <nav>
      <i class="bi bi-list"></i>
      <ul>
        <li class="hidden prices"><a @click="showPrices()">Prices</a></li>
        <li class="hidden enroll" id="enroll">
          <router-link to="enroll">Enroll</router-link>
        </li>
        <li class="hidden contact" id="contact">
          <a @click="showContact()">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggle() {
      let width = window.innerWidth;
      if (width > 768) {
        let i = document.querySelector("i");
        i.classList.add("hidden");

        let li_prices = document.querySelector(".prices");
        let li_enroll = document.querySelector(".enroll");
        let li_contact = document.querySelector(".contact");

        li_prices.classList.toggle("hidden");
        li_enroll.classList.toggle("hidden");
        li_contact.classList.toggle("hidden");
      }
    },
    trackWidth() {
      window.addEventListener("resize", () => {
        this.toggle();
      });
    },
    showPrices() {
      window.scrollTo(0, 2100);
    },
    showContact() {
      window.scrollTo(0, 2600);
    },
  },
  mounted() {
    this.toggle();
    this.trackWidth();
  },
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
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 1rem;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  padding-left: 2rem;
}

a:hover {
  cursor: pointer;
  color: rgb(221, 240, 221);
}
</style>
