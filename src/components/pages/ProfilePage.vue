<template>
  <div class="main-profile-div">
    <base-popup id="password-msg"> Password changed! </base-popup>
    <base-popup id="info-msg-no-change"> No changes made! </base-popup>
    <base-popup id="info-msg"> Info sent to aprovation! </base-popup>

    <div v-if="showPassword" class="password-change-container">
      <form @submit.prevent="setPassword()">
        <h1>Change your password</h1>
        <p v-if="!validPassword">Passwords don't match, please try again</p>
        <p v-else-if="noPassword">Please enter a new password</p>
        <div class="inputs">
          <div>
            <label for="new-password">New password:</label>
            <input
              type="text"
              :class="{ invalid: !newPassword.isValid }"
              v-model="newPassword.val"
              name="new-password"
              @blur="clearValidity('newPassword')"
            />
          </div>
          <div>
            <label for="new-password-confirmation">Repeat the password:</label>
            <input
              type="text"
              :class="{ invalid: !newPassword2.isValid }"
              v-model="newPassword2.val"
              name="new-password-confirmation"
              @blur="clearValidity('newPassword2')"
            />
          </div>
        </div>
        <div class="btns-password">
          <base-button @click="display('password')"> Back </base-button>
          <base-button type="submit"> Done </base-button>
        </div>
      </form>
    </div>

    <div v-else-if="showUpdate">
      <div class="update-container">
        <h1>Update your information</h1>
        <p v-if="!validUpdate">Please enter a value</p>
        <form @submit.prevent="setInfo()" class="update-form">
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model="name.val"
              :class="{ invalid: !name.isValid }"
              @blur="clearValidity('name')"
            />
            <p v-if="!this.name.isValid">Please enter a value</p>
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email.val"
              :class="{ invalid: !email.isValid }"
              @blur="clearValidity('email')"
            />
            <p v-if="!this.email.isValid">Please enter a value</p>
          </div>
          <div>
            <label for="guardianName">Guardian: </label>
            <input
              type="text"
              name="guardianName"
              id="guardianName"
              v-model="guardianName.val"
              :class="{ invalid: !guardianName.isValid }"
              @blur="clearValidity('guardianName')"
            />
            <p v-if="!this.guardianName.isValid">Please enter a value</p>
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              v-model="phone.val"
              :class="{ invalid: !phone.isValid }"
              @blur="clearValidity('phone')"
            />
            <p v-if="!this.phone.isValid">Please enter a value</p>
          </div>
          <div class="btns-update">
            <base-button @click="display('update')"> Back </base-button>
            <base-button type="submit"> Done </base-button>
          </div>
        </form>
      </div>
    </div>

    <div v-else class="profile-container">
      <img src="../../assets/profile.jpg" alt="" />
      <div v-for="info in userInfo" :key="info.id">
        <h1>{{ info.studentName }}</h1>
        <div class="info">
          <p class="title">Email:</p>
          <p>{{ info.email }}</p>
        </div>
        <div class="grade">
          <p class="title">Grade:</p>
          <p>{{ info.grade }}</p>
        </div>

        <div class="info-two">
          <div>
            <p class="title">Guardian:</p>
            <p>{{ info.parentName }}</p>
          </div>
          <div>
            <p class="title">Phone:</p>
            <p>{{ info.phone }}</p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <base-button class="button" id="password" @click="display('password')">
          Redefine Password
        </base-button>
        <base-button class="button" id="update" @click="display('update')">
          Update Info
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import BasePopup from "../ui/BasePopup.vue";

export default {
  data() {
    return {
      userId: this.$route.params.userId,
      showPassword: false,
      showUpdate: false,
      noPassword: false,
      validPassword: true,
      validUpdate: true,
      newPassword: { val: "", isValid: true },
      newPassword2: { val: "", isValid: true },
      name: { val: "", isValid: true },
      phone: { val: "", isValid: true },
      email: { val: "", isValid: true },
      guardianName: { val: "", isValid: true },
    };
  },
  components: {
    BaseButton,
    BasePopup,
  },
  computed: {
    userInfo() {
      let data = JSON.parse(sessionStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);

      return [data[idx]];
    },
  },
  methods: {
    setInputValues() {
      let data = JSON.parse(sessionStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);

      this.name.val = data[idx].studentName;
      this.phone.val = data[idx].phone;
      this.email.val = data[idx].email;
      this.guardianName.val = data[idx].parentName;
    },
    display(section) {
      if (section == "password") {
        this.newPassword.val = "";
        this.newPassword2.val = "";
        this.showPassword = !this.showPassword;
      } else this.showUpdate = !this.showUpdate;
    },
    validatePassword() {
      if (this.newPassword.val !== this.newPassword2.val) {
        this.newPassword.isValid = false;
        this.newPassword2.isValid = false;
        return false;
      } else if (this.newPassword.val == "" || this.newPassword2.val == "") {
        this.newPassword.isValid = false;
        this.newPassword2.isValid = false;
        this.noPassword = true;
      } else return true;
    },
    setPassword() {
      this.validPassword = this.validatePassword();

      if (!this.validPassword || this.noPassword) {
        return;
      }

      let data = JSON.parse(sessionStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);

      data[idx].password = this.newPassword.val;

      sessionStorage.setItem("arrayUsers", JSON.stringify(data));

      let popup = document.getElementById("password-msg");
      popup.classList = "popup";

      setTimeout(() => {
        popup.classList = "";
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

      if (name.value == "") {
        this.name.isValid = false;
        name.value = "";
        return false;
      } else if (email.value == "") {
        this.email.isValid = false;
        email.value = "";
        return false;
      } else if (guardianName.value == "") {
        this.guardianName.isValid = false;
        guardianName.value = "";
        return false;
      } else if (phone.value == "") {
        this.phone.isValid = false;
        phone.value = "";
        return false;
      }
      return true;
    },
    setInfo() {
      this.validUpdate = this.validateUpdate();
      if (!this.validUpdate) {
        return;
      }

      let data = JSON.parse(sessionStorage.getItem("arrayUsers"));
      let idx = data.findIndex((e) => e.id == this.userId);

      let user = data[idx];

      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let guardianName = document.querySelector("#guardianName").value;
      let phone = document.querySelector("#phone").value;

      if (
        name == user.studentName &&
        email == user.email &&
        guardianName == user.parentName &&
        phone == user.phone
      ) {
        let popup = document.getElementById("info-msg-no-change");
        popup.classList = "popup";
        setTimeout(() => {
          popup.classList = "";
          window.scrollTo(0, top);
        }, 2000);
        this.showUpdate = false;
        return;
      }

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
        grade: user.grade,
        classes: user.classes,
      };

      data[idx] = updatedUser;

      sessionStorage.setItem("arrayUsers", JSON.stringify(data));
      let popup = document.getElementById("info-msg");
      popup.classList = "popup";

      setTimeout(() => {
        popup.classList = "";
        window.scrollTo(0, top);
      }, 2000);

      this.showUpdate = false;
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
  },
  mounted() {
    this.setInputValues();
  },
};
</script>

<style scoped>
.main-profile-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
}

.main-profile-div,
.password-change-container {
  width: 100%;
}

.profile-container,
.password-change-container form,
.update-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0em;
}

img {
  width: 10rem;
  height: 10rem;
  border-radius: 10rem;
}

h1 {
  color: rgb(0, 7, 92);
  font-size: 2rem;
  padding: 0em 2em;
  border-bottom: solid 0.1rem rgb(0, 7, 92);
  text-align: center;
}

p {
  margin: 0;
  font-size: 1.3rem;
}

.title {
  color: rgb(0, 7, 92);
  font-weight: bold;
  margin-right: 0.5em;
}

.info,
.grade {
  display: flex;
}

.info,
.info-two {
  margin-bottom: 3em;
}

.info-two,
.info-two div {
  display: flex;
}

.info-two div {
  margin-top: 3em;
  margin-right: 0.5em;
}

.button {
  color: white;
  font-size: 1.2rem;
  padding: 0.5em;
  border-radius: 3px;
}

.button:first-child {
  margin-right: 1.1em;
}

.buttons {
  display: flex;
}

/*password change */

input {
  border-radius: 3px;
  border: none;
  box-shadow: 0px 0px 5px rgb(0, 7, 92);
  padding: 0.6em;
}

.inputs {
  display: flex;
  padding: 2em;
}

.inputs div {
  display: flex;
  flex-direction: column;
}

.inputs label {
  font-size: 1.2rem;
  margin-bottom: 0.5em;
}

.inputs div:first-child input {
  margin-right: 3em;
}

form p:nth-child(2) {
  margin-left: 2rem;
}

.btns-password,
.btns-update {
  display: flex;
  padding: 2em;
}

.btns-password button,
.btns-update button {
  color: white;
  font-size: 1.2rem;
  padding: 0.5em 1em;
  border-radius: 3px;
}

.btns-password button:first-child {
  margin-right: 5em;
}

/*Change info */

.update-container label {
  color: rgb(0, 7, 92);
  font-size: 1.2rem;
  margin-right: 0.5em;
}

.update-container input {
  margin-left: 3em;
}

.update-form div {
  margin-top: 2em;
  margin-bottom: 1em;
}

#guardianName {
  margin-left: 0.8em;
}

.btns-update button:first-child {
  margin-right: 5em;
}

@media (max-width: 675px) {
  .update-container h1 {
    padding: 0em 1.5em;
  }
}

/*popoups */

.popup {
  display: block;
  transform: translateY(2em);
  transition: 2s;
}

.invalid {
  border: 1px solid red;
  box-shadow: 0px 0px 5px red;
}
</style>
