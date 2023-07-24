<template>
  <div class="main-profile-div">
    <base-warning v-if="passwordChanged" class="warning">
      <p>Password changed!</p>
    </base-warning>

    <base-warning v-else-if="infoChanged" class="warning">
      <p>Info sent to aprovation!</p>
    </base-warning>

    <div v-if="showPassword">
      <form @submit.prevent="setPassword()">
        <h1 class="pchange">Change your password</h1>
        <p v-if="!validPassword">Passwords don't match, please try again</p>
        <p v-else-if="noPassword">Please enter a new password</p>
        <div class="pchange-box">
          <div>
            <p>New password:</p>
            <input
              type="text"
              :class="{ invalid: !newPassword.isValid }"
              v-model="newPassword.val"
              @blur="clearValidity('newPassword')"
            />
          </div>
          <div>
            <p>Please repeat the password:</p>
            <input
              type="text"
              class="second-input"
              :class="{ invalid: !newPassword2.isValid }"
              v-model="newPassword2.val"
              @blur="clearValidity('newPassword2')"
            />
          </div>
        </div>
        <div class="btns-password">
          <base-button
            class="btn-password"
            @click="displayPassword(false, 'password')"
          >
            Back
          </base-button>
          <base-button class="btn-password"> Done </base-button>
        </div>
      </form>
    </div>

    <div v-else-if="showUpdate">
      <div v-for="info in userInfo" :key="info.id">
        <h1 class="ichange">Update your information</h1>
        <p v-if="!validUpdate">Please enter a value</p>
        <form @submit.prevent="setInfo()">
          <div class="info">
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              :class="{ invalid: !name.isValid }"
              @blur="clearValidity('name')"
              :value="info.studentName"
            />
            <p v-if="!this.name.isValid">Please enter a value</p>

            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              :class="{ invalid: !email.isValid }"
              @blur="clearValidity('email')"
              :value="info.email"
            />
            <p v-if="!this.email.isValid">Please enter a value</p>
          </div>
          <div>
            <div class="col">
              <label for="guardianName">Guardian: </label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                :class="{ invalid: !guardianName.isValid }"
                @blur="clearValidity('guardianName')"
                :value="info.parentName"
              />
              <p v-if="!this.guardianName.isValid">Please enter a value</p>
            </div>
            <div class="col">
              <label for="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                :class="{ invalid: !phone.isValid }"
                @blur="clearValidity('phone')"
                :value="info.phone"
              />
              <p v-if="!this.phone.isValid">Please enter a value</p>
            </div>
          </div>
          <div class="btns-password">
            <base-button
              class="btn-password"
              @click="displayPassword(false, 'update')"
            >
              Back
            </base-button>
            <base-button class="btn-password"> Done </base-button>
          </div>
        </form>
      </div>
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
        <base-button
          class="button"
          id="password"
          @click="displayPassword(true, 'password')"
        >
          Redefine Password
        </base-button>
        <base-button
          class="button"
          id="update"
          @click="displayPassword(true, 'update')"
        >
          Update Info
        </base-button>
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
      userId: this.$route.params.userId,
      showPassword: false,
      showUpdate: false,
      validPassword: true,
      validUpdate: true,
      noPassword: false,
      passwordChanged: false,
      infoChanged: false,
      newPassword: { val: "", isValid: true },
      newPassword2: { val: "", isValid: true },
      name: { isValid: true },
      phone: { isValid: true },
      email: { isValid: true },
      guardianName: { isValid: true },
    };
  },
  components: {
    BaseButton,
    BaseWarning,
  },
  computed: {
    userInfo() {
      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);
      return [data[idx]];
    },
  },
  methods: {
    displayPassword(val, section) {
      if (section == "password") {
        this.newPassword.val = "";
        this.newPassword2.val = "";
        this.showPassword = val;
      } else this.showUpdate = val;
    },
    validatePassword() {
      if (this.newPassword.val !== this.newPassword2.val) {
        this.newPassword.isValid = false;
        this.newPassword2.isValid = false;
        this.validPassword = false;
      } else if (this.newPassword.val == "" || this.newPassword2.val == "") {
        this.newPassword.isValid = false;
        this.newPassword2.isValid = false;
        this.noPassword = true;
      } else this.validPassword = true;
    },
    setPassword() {
      this.validatePassword();

      if (!this.validPassword || this.noPassword) {
        return;
      }

      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);

      data[idx].password = this.newPassword;

      localStorage.getItem("arrayUsers", JSON.stringify(data));

      this.passwordChanged = true;

      setTimeout(() => {
        this.passwordChanged = false;
        window.scrollTo(0, top);
      }, 2000);

      this.newPassword.val = "";
      this.newPassword2.val = "";

      this.showPassword = false;
    },
    validateUpdate() {
      let name = document.querySelector("#name");
      let email = document.querySelector("#email");
      let guardianName = document.querySelector("#guardianName");
      let phone = document.querySelector("#phone");

      console.log("1");
      if (name.value == "") {
        this.name.isValid = false;
        name.value = "";
        this.validUpdate = false;
        console.log("2");
        return;
      } else if (email.value == "") {
        this.email.isValid = false;
        email.value = "";
        this.validUpdate = false;
        console.log("3");
        return;
      } else if (guardianName.value == "") {
        this.guardianName.isValid = false;
        guardianName.value = "";
        this.validUpdate = false;
        console.log("4");
        return;
      } else if (phone.value == "") {
        this.phone.isValid = false;
        phone.value = "";
        this.validUpdate = false;
        console.log("5");
        return;
      }
      console.log("6");
      this.validUpdate = true;
    },
    setInfo() {
      this.validateUpdate();

      if (!this.validUpdate) {
        return;
      }

      console.log("p");
      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);

      let user = data[idx];

      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let guardianName = document.querySelector("#guardianName").value;
      let phone = document.querySelector("#phone").value;

      const updatedUser = {
        id: user.id,
        hasLoggedIn: user.hasLoggedIn,
        code: user.code,
        parentName: guardianName,
        studentName: name,
        email: email,
        phone: phone,
        isLoggedIn: true,
        password: user.password,
        classes: user.classes,
      };

      data[idx] = updatedUser;

      localStorage.setItem("arrayUsers", JSON.stringify(data));

      this.infoChanged = true;

      setTimeout(() => {
        this.infoChanged = false;
        window.scrollTo(0, top);
      }, 2000);

      this.showUpdate = false;
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
  },
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

.warning {
  margin-left: -1rem;
}

.warning p {
  font-size: 1.5rem;
}

input {
  border-radius: 0.2rem;
  border: none;
  box-shadow: 0px 0px 5px rgb(56, 187, 56);
  height: 1.5rem;
}

input:focus {
  outline: none;
}

.second-input {
  margin-left: 2rem;
}

.btn-password {
  margin-left: 0rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  width: 10rem;
  height: 3rem;
  color: white;
  font-size: 1.2rem;
  position: initial;
}

.pchange {
  font-size: 2.4rem;
  width: 24.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-left: 2rem;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
}

.pchange-box {
  display: flex;
  flex-direction: row;
}

.pchange-box div {
  margin-left: 2rem;
}

.pchange-box div p {
  font-size: 1rem;
  padding-bottom: 0.3rem;
  color: black;
}

form p:nth-child(2) {
  margin-left: 2rem;
}

.btns-password {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.ichange {
  font-size: 2.4rem;
  width: 27rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
  margin-left: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
}

.info {
  margin-bottom: 2rem;
}

.info label {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  margin-left: 1rem;
}

.info input {
  margin-left: 1rem;
}

.info input {
  width: 20rem;
}

.col {
  margin-bottom: 1rem;
}

.col label {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  margin-left: 1rem;
}

.col input {
  width: 15rem;
  margin-left: 1rem;
}

.invalid {
  border: 1px solid red;
  box-shadow: 0px 0px 5px red;
}
</style>
