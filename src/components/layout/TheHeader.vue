<template>
  <div class="main-div">
    <header>
      <div v-if="!loggedIn">
        <nav>
          <i class="bi bi-list" id="burguer-icon" @click="showDropDown()"></i>
          <i class="bi bi-x-lg hidden" id="x-icon" @click="showDropDown()"></i>
          <ul class="unlogged-nav">
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
          <base-button class="button" id="login" @click="pushLogin()">
            Login
          </base-button>
        </nav>
      </div>
      <div v-else>
        <nav>
          <i class="bi bi-list" id="burguer-icon" @click="showDropDown()"></i>
          <i class="bi bi-x-lg hidden" id="x-icon" @click="showDropDown()"></i>
          <ul class="logged-nav">
            <li
              @mouseenter="showCard()"
              @mouseleave="showCard()"
              class="profile"
            >
              <router-link
                :to="{ name: 'profile', params: this.userId }"
                @click="homeChange()"
              >
                <i class="bi bi-person"></i>
              </router-link>
            </li>
            <li
              class="board"
              :class="notHome && width > 768 ? 'show-home' : ''"
            >
              <router-link
                :to="{ name: 'board', params: this.userId }"
                @click="homeChange()"
                >Board</router-link
              >
            </li>
            <li class="classes">
              <router-link
                :to="{ name: 'classes', params: this.userId }"
                @click="homeChange()"
                >Classes</router-link
              >
            </li>
          </ul>
          <div class="div-button">
            <base-button class="button" @click="pushLogout()">
              Logout
            </base-button>
          </div>
        </nav>
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
      <ul id="drop-down" v-if="!loggedIn">
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
      <ul id="drop-down" v-else>
        <li>
          <router-link
            :to="{ name: 'profile', params: this.userId }"
            @click="homeChange()"
          >
            Profile
          </router-link>
        </li>
        <li>
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
      loggedIn: JSON.parse(sessionStorage.getItem("isLoggedIn")),
      notHome: false,
      showDrop: false,
      userId: this.$route.params.userId,
      showMiniProfile: false,
    };
  },
  components: {
    BaseButton,
    BaseProfileCard,
  },
  methods: {
    toggle() {
      //not logged in
      let prices = document.getElementsByClassName("prices")[0];
      let enroll = document.getElementsByClassName("enroll")[0];
      let contact = document.getElementsByClassName("contact")[0];
      let profile = document.getElementsByClassName("profile")[0];
      let home = document.getElementsByClassName("home")[0];

      //logged
      let board = document.getElementsByClassName("board")[0];
      let classes = document.getElementsByClassName("classes")[0];
      let menu = document.getElementById("burguer-icon");
      let close_menu = document.getElementById("x-icon");

      if (this.showDrop) this.showDrop = false;

      if (this.$route.params.userId == undefined) {
        if (window.innerWidth < 768) {
          menu.classList.remove("hidden");
          if (!close_menu.classList.contains("hidden")) {
            close_menu.classList.add("hidden");
          }

          home.classList.add("hidden");
          prices.classList.add("hidden");
          enroll.classList.add("hidden");
          contact.classList.add("hidden");
        } else {
          menu.classList.add("hidden");
          close_menu.classList.add("hidden");

          if (this.$route.path != "/home") home.classList.remove("hidden");

          prices.classList.remove("hidden");
          enroll.classList.remove("hidden");
          contact.classList.remove("hidden");
        }
        return;
      }

      if (this.$route.params !== undefined) {
        if (window.innerWidth < 768) {
          menu.classList.remove("hidden");
          if (!close_menu.classList.contains("hidden")) {
            close_menu.classList.add("hidden");
          }

          profile.classList.add("hidden");
          board.classList.add("hidden");
          classes.classList.add("hidden");
        } else {
          menu.classList.add("hidden");
          close_menu.classList.add("hidden");
          profile.classList.remove("hidden");
          board.classList.remove("hidden");
          classes.classList.remove("hidden");
        }
      }
    },
    showPrices() {
      if (this.$route.path != "/School-Site-Concept/home") {
        this.$router.push("home");
        setTimeout(() => {
          window.scrollTo(0, 1800);
        }, 350);
      }
      window.scrollTo(0, 1800);
    },
    showContact() {
      if (this.$route.path != "/School-Site-Concept/home") {
        this.$router.push("home");
        setTimeout(() => {
          window.scrollTo(0, 5000);
        }, 350);
      }
      window.scrollTo(0, 5000);
    },
    pushLogin() {
      this.$router.push("/School-Site-Concept/login");
    },
    pushLogout() {
      sessionStorage.setItem("isLoggedIn", JSON.stringify(false));

      const data = JSON.parse(sessionStorage.getItem("arrayUsers"));

      const index = data.findIndex((e) => e.id == this.userId);

      data[index].isLoggedIn = false;

      sessionStorage.setItem("arrayUsers", JSON.stringify(data));

      this.$router.push("/School-Site-Concept/home");
    },
    showHome() {
      if (this.$route.path != "/School-Site-Concept/home" && this.width > 768) {
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

      if (this.loggedIn == false) {
        this.toggle();
        this.showHome();
      }
    },
  },
  mounted() {
    if (this.loggedIn == false) {
      this.showHome();
    }
    this.toggle();
    this.homeChange();
    window.addEventListener("resize", () => this.toggle());
  },
};
</script>

<style scoped>
.show-animation {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-name: rotateZ;
  color: white;
  font-size: 3rem;
  margin-left: 0.7rem;
}

@keyframes rotateZ {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

.bi-list {
  font-size: 3rem;
  padding-left: 0.5rem;
  color: white;
}

header {
  background-color: rgb(0, 7, 92);
  padding: 0.5em 1em;
}

header div nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
}

.logged-nav li,
.unlogged-nav li {
  padding-left: 1em;
}

.board {
  display: none;
}

.show-home {
  display: block;
}

a {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
}

a:hover {
  cursor: pointer;
  color: rgb(211, 198, 111);
}

.button {
  background-color: rgb(0, 7, 92);
  border: 0.1rem solid rgb(211, 198, 111);
  color: white;
  height: 2em;
  font-size: 1.3rem;
  padding: 0em 0.7em;
}

.button:hover {
  background-color: white;
  color: rgb(0, 7, 92);
}

img {
  width: 1.5rem;
  height: 1.5rem;
}

.bi-person {
  font-size: 2.2rem;
}

#drop-down {
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 7, 92);
  padding: 1em;
  position: absolute;
  z-index: 100;
  margin-top: 0;
}

#drop-down li {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 1rem;
  padding: 0em 1em;
}

.hidden {
  display: none;
  transition: all ease-in;
}
</style>
