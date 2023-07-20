<template>
  <div class="main-profile-div">
    <base-warning v-if="passwordChanged" class="warning">
      <p>Password changed!</p>
    </base-warning>

    <div v-if="showPassword">
      <form @submit.prevent="setPassword()">
        <h1>Change your password</h1>
        <p v-if="!validPassword">Passwords don't match, please try again</p>
        <div class="info-two">
          <div class="col">
            <p>New Password:</p>
            <input type="text" v-model="newPassword" />
          </div>
          <div class="col">
            <p>Please repeat the password:</p>
            <input type="text" v-model="newPassword2" />
          </div>
        </div>
        <base-button class="button"> Done </base-button>
      </form>
    </div>

    <div v-else>
      <img src="../../assets/ethics.jpg" alt="" />
      <div v-for="info in userInfo" :key="info.id">
        <div class="info">
          <h1>{{ info.studentName }}</h1>
          <p>Email:</p>
          <p>{{ info.email }}</p>
          <p>grade</p>
        </div>
        <div class="info-two">
          <div class="col">
            <p>Guardian:</p>
            <p>{{ info.parentName }}</p>
          </div>
          <div class="col">
            <p>Phone:</p>
            <p>{{ info.phone }}</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <base-button class="button" id="password" @click="displayPassword()">
          Redefine Password
        </base-button>
        <base-button class="button" id="update"> Update Info </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import BaseWarning from "../ui/BaseWarning.vue";

export default {
  data() {
    return {
      userId: "Emerson",
      id: this.$route.params.userId,
      showPassword: false,
      validPassword: true,
      passwordChanged: false,
      newPassword: "",
      newPassword2: "",
    };
  },
  components: {
    BaseButton,
    BaseWarning,
  },
  computed: {
    userInfo() {
      let data = JSON.parse(localStorage.getItem("arrayRequests"));
      let idx = data.findIndex((e) => e.studentName == this.userId);
      return [data[idx]];
    },
  },
  methods: {
    displayPassword() {
      this.showPassword = true;
    },
    validatePassword() {
      if (this.newPassword == this.newPassword2) {
        this.validPassword = true;
      } else {
        this.validPassword = false;
      }
    },
    setPassword() {
      this.validatePassword();

      if (!this.validPassword) {
        return;
      }

      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.id);

      let newPassword = (data[idx].password = this.newPassword);

      localStorage.getItem("arrayUsers", JSON.stringify(newPassword));

      this.passwordChanged = true;

      setTimeout(() => {
        this.passwordChanged = false;
        window.scrollTo(0, top);
      }, 2000);

      this.newPassword = "";
      this.newPassword2 = "";

      this.showPassword = false;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.main-profile-div {
  box-shadow: 0px 0px 5px rgb(56, 187, 56);
  width: 30rem;
  margin-left: 26rem;
  margin-top: 3rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
}

img {
  width: 15rem;
  height: 15rem;
  border-radius: 10rem;
  margin-left: 7.5rem;
  margin-top: 2rem;
}

h1 {
  color: rgb(56, 187, 56);
  font-size: 2.8rem;
  width: 17rem;
  padding-left: 5.7rem;
  margin-left: 3.5rem;
  border-bottom: solid 0.1rem rgb(56, 187, 56);
}

p {
  font-size: 1.4rem;
}

.info {
  display: flex;
  flex-direction: column;
}

.info p {
  margin-left: 5rem;
}

.info p:nth-child(2) {
  margin-bottom: 0rem;
  color: rgb(56, 187, 56);
}
.col p:nth-child(1) {
  margin-bottom: 0rem;
  color: rgb(56, 187, 56);
}

.info-two {
  display: flex;
  flex-direction: row;
}

.info-two p {
  margin-left: 5rem;
}

.button {
  margin-left: 0rem;
  margin-top: -4rem;
  margin-bottom: 2rem;
  width: 10rem;
  height: 3rem;
  color: white;
  font-size: 1.2rem;
  position: initial;
}

.buttons {
  display: flex;
  flex-direction: row;
  margin-top: 6rem;
}

#update {
  margin-left: 2rem;
}

#password {
  margin-left: 4rem;
}

.warning p {
  font-size: 1.5rem;
}
</style>
