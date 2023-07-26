<template>
  <div class="main-div">
    <header>
      <div v-if="!loggedIn">
        <nav>
          <i class="bi bi-list" id="burguer-icon" @click="showDropDown()"></i>
          <i class="bi bi-x-lg hidden" id="x-icon" @click="showDropDown()"></i>
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
        <base-button class="button" id="login" @click="pushLogin()">
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
        <div class="div-button">
          <base-button class="button" @click="pushLogout()">
            <p>Logout</p>
          </base-button>
        </div>
      </div>
    </header>
    <div v-if="showMiniProfile">
      <div v-for="info in infos" :key="info.id">
        <base-profile-card
          id="profile-card"
          url="vanya.jpg"
          :name="info.studentName"
          :grade="info.grade"
          :email="info.email"
        >
        </base-profile-card>
      </div>
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
      showMiniProfile: false,
    };
  },
  computed: {},
  components: {
    BaseButton,
    BaseProfileCard,
  },
  methods: {
    toggle() {
      if (this.width > 768 && !this.loggedIn) {
        let i = document.querySelector("i");
        i.classList.add("hidden");

        try {
          let li_prices = document.querySelector(".prices");
          let li_enroll = document.querySelector(".enroll");
          let li_contact = document.querySelector(".contact");

          li_prices.classList.toggle("hidden");
          li_enroll.classList.toggle("hidden");
          li_contact.classList.toggle("hidden");
        } catch (e) {
          console.log(e);
        }
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
      this.showMiniProfile = !this.showMiniProfile;
    },
    showDropDown() {
      if (this.showDrop == false) {
        this.showDrop = true;
        document.querySelector("#x-icon").classList.remove("hidden");
        document.querySelector("#x-icon").classList.add("show-animation");
        document.querySelector("#burguer-icon").classList.add("hidden");
        return;
      }
      document.querySelector("#x-icon").classList.add("hidden");
      document.querySelector("#burguer-icon").classList.remove("hidden");
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
  transition: all ease-in;
}

.show-animation {
  animation-duration: 4s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  animation-name: rotateX;
  color: white;
  font-size: 2.5rem;
  margin-left: 0.7rem;
  margin-top: 1rem;
}

@keyframes rotateX {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

.bi-list {
  font-size: 3rem;
  position: absolute;
  padding-left: 0.5rem;
  color: white;
}

header {
  background-color: rgb(0, 7, 92);
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
  color: rgb(211, 198, 111);
}

p {
  color: white;
  font-size: 1.5rem;
  margin-top: 0.3rem;
}

.button {
  background-color: rgb(0, 7, 92);
  border: 0.1rem solid white;
  width: 5rem;
  height: 2.5rem;
  margin-top: -0.5rem;
  margin-left: 30rem;
}

.button:hover {
  border-color: rgb(211, 198, 111);
  color: rgb(211, 198, 111);
}

.button p:hover {
  color: rgb(211, 198, 111);
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
  background-color: rgb(0, 7, 92);
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

@media (min-width: 576px) {
  .button {
    margin-left: 42rem;
  }
}

@media (min-width: 768px) {
  .button {
    width: 7rem;
    margin-top: -2.3rem;
    margin-left: 54rem;
  }
}

@media (min-width: 992px) {
  .button {
    width: 7rem;
    margin-top: -2.3rem;
    margin-left: 65rem;
  }
}

@media (min-width: 1200px) {
  .button {
    margin-left: 75rem;
  }
}
</style>
