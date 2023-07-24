<template>
  <div>
    <header>
      <div v-if="!loggedIn">
        <nav>
          <i class="bi bi-list" @click="showDropDown()"></i>
          <ul>
            <li class="hidden home">
              <router-link to="home">Home</router-link>
            </li>
            <li class="hidden prices"><a @click="showPrices()">Prices</a></li>
            <li class="hidden enroll" id="enroll">
              <router-link to="enroll">Enroll</router-link>
            </li>
            <li class="hidden contact" id="contact">
              <a @click="showContact()">Contact Us</a>
            </li>
          </ul>
        </nav>
        <base-button class="button" @click="pushLogin()">
          <p>Login</p>
        </base-button>
      </div>
      <div v-else>
        <nav>
          <ul>
            <li @mouseenter="showCard()" @mouseleave="showCard()">
              <router-link
                :to="{ name: 'profile', params: this.userId }"
                @click="homeChange()"
              >
                <i class="bi bi-person"></i>
              </router-link>
            </li>
            <li v-if="notHome">
              <router-link
                :to="{ name: 'board', params: this.userId }"
                @click="homeChange()"
                >Board</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'classes', params: this.userId }"
                @click="homeChange()"
                >Classes</router-link
              >
            </li>
          </ul>
        </nav>
        <base-button class="button" @click="pushLogout()">
          <p>Logout</p>
        </base-button>
      </div>
    </header>
    <div v-for="info in infos" :key="info.id">
      <base-profile-card
        class="hidden"
        id="profile-card"
        url="vanya.jpg"
        :name="info.studentName"
        grade="highschool"
        :email="info.email"
      >
      </base-profile-card>
    </div>
    <div v-if="showDrop">
      <ul id="drop-down">
        <li>
          <router-link to="home">Home</router-link>
        </li>
        <li><a @click="showPrices()">Prices</a></li>
        <li>
          <router-link to="enroll">Enroll</router-link>
        </li>
        <li>
          <a @click="showContact()">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import BaseProfileCard from "../ui/BaseProfileCard.vue";

export default {
  props: ["infos"],
  data() {
    return {
      width: window.innerWidth,
      loggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
      notHome: false,
      showDrop: false,
      userId: this.$route.params.userId,
    };
  },
  components: {
    BaseButton,
    BaseProfileCard,
  },
  methods: {
    toggle() {
      if (this.width > 768 && !this.loggedIn) {
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
      if (this.$route.path != "/home") {
        this.$router.push("home");
        setTimeout(() => {
          window.scrollTo(0, 2100);
        }, 350);
      }
      window.scrollTo(0, 2100);
    },
    showContact() {
      if (this.$route.path != "/home") {
        this.$router.push("home");
        setTimeout(() => {
          window.scrollTo(0, 2600);
        }, 350);
      }
      window.scrollTo(0, 2600);
    },
    pushLogin() {
      this.$router.push("/login");
    },
    pushLogout() {
      localStorage.setItem("isLoggedIn", JSON.stringify(false));

      const data = JSON.parse(localStorage.getItem("arrayUsers"));

      const index = data.findIndex((e) => e.id == this.userId);

      data[index].isLoggedIn = false;

      localStorage.setItem("arrayUsers", JSON.stringify(data));

      this.$router.push("/home");
    },
    showHome() {
      if (this.$route.path != "/home" && this.width > 768) {
        document.querySelector(".home").classList.toggle("hidden");
      }
    },
    showCard() {
      document.querySelector("#profile-card").classList.toggle("hidden");
    },
    showDropDown() {
      if (this.showDrop == false) {
        this.showDrop = true;
        return;
      }
      this.showDrop = false;
    },
    homeChange() {
      let path = this.$route.path;

      if (path.includes("/classes/") || path.includes("/profile/")) {
        this.notHome = true;
        this.keyValue = true;
        return;
      }
      this.notHome = false;
    },
  },
  watch: {
    $route() {
      this.homeChange();
      this.trackWidth();

      if (this.loggedIn == false) {
        this.toggle();
        this.showHome();
      }
    },
  },
  mounted() {
    if (this.loggedIn == false) {
      this.toggle();
      this.showHome();
    }
    this.homeChange();
    this.trackWidth();
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.bi-list {
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

p {
  color: rgb(56, 187, 56);
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.button {
  background-color: white;
  border: 0.1rem solid rgb(56, 187, 56);
  width: 7rem;
  height: 3rem;
  margin-top: -2.6rem;
  margin-left: 75rem;
}

img {
  width: 1.5rem;
  height: 1.5rem;
}

.bi-person {
  font-size: 2.5rem;
  margin-left: -1rem;
  margin-top: -0.5rem;
  position: absolute;
}

#drop-down {
  display: flex;
  flex-direction: column;
  background-color: rgb(56, 187, 56);
  width: 10rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  position: absolute;
  z-index: 100;
}

#drop-down li {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 1rem;
}
</style>
