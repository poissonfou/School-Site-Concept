<template>
  <base-form
    class="form"
    :class="{ adjustHeight: !email.isValid || !password.isValid }"
  >
    <h1>Login</h1>
    <p v-if="notRegistered">
      Your information has not been found, please try again
    </p>
    <p v-if="firstLogin">
      We've identified that this is your first login, please enter your code
    </p>
    <p v-else-if="firstLogin == false">
      You've already logged in once, enter only your email and password
    </p>
    <form @submit.prevent="sendRequest()">
      <div class="check-login">
        <p>First time login-in?</p>
        <label for="loginCheck"> Yes</label>
        <input
          type="checkbox"
          name="loginCheck"
          id="loginCheck"
          @change="checkFirstLogin()"
        />
      </div>

      <div class="input-box" v-if="checked">
        <p>
          Enter the activation code provided to you by the school
          administration.
        </p>
        <label for="code">Code</label>
        <input type="text" name="code" class="input" v-model="code.val" />
      </div>

      <div class="input-box">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          v-model="email.val"
          class="input"
          :class="{ invalid: !email.isValid }"
          @blur="clearValidity('email')"
        />
        <p v-if="!email.isValid">Email not found, please try again</p>
      </div>

      <div class="input-box">
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          v-model="password.val"
          class="input"
          :class="{ invalid: !password.isValid }"
          @blur="clearValidity('password')"
        />
        <p v-if="!password.isValid">Incorrect password, please try again</p>
      </div>

      <base-button class="button">
        <p>LOGIN</p>
      </base-button>
    </form>
  </base-form>
</template>

<script>
import BaseForm from "../ui/BaseForm.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  data() {
    return {
      firstLogin: null,
      formIsValid: true,
      notRegistered: false,
      checked: false,
      code: { val: "", isValid: true },
      email: { val: "", isValid: true },
      password: { val: "", isValid: true },
    };
  },
  components: {
    BaseForm,
    BaseButton,
  },
  methods: {
    checkFirstLogin() {
      let input = document.querySelector("#loginCheck");
      if (input.checked == true) {
        this.checked = true;
        let form = document.querySelector(".form");
        form.style.height = "28rem";
      } else {
        this.checked = false;
        let form = document.querySelector(".form");
        form.style.height = "19rem";
      }
    },
    validateForm() {
      this.formIsValid = true;

      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "") {
        this.password.isValid = false;
        this.formIsValid = false;
        return;
      }
      let arrayStorage = JSON.parse(localStorage.getItem("arrayRequests"));

      const foundEmail = arrayStorage.find((e) => e.email == this.email.val);

      const foundPassword = arrayStorage.find(
        (e) => e.password == this.password.val
      );

      let foundCode = arrayStorage.find((e) => e.code == this.code.val);

      const index = arrayStorage.findIndex(
        (e) => e.password == this.password.val
      );
      const loginInfo = arrayStorage[index].hasLoggedIn;

      if (loginInfo === false && this.checked === false) {
        this.firstLogin = true;
        this.formIsValid = false;
        return;
      } else if (loginInfo === false && foundCode) {
        const data = JSON.parse(localStorage.getItem("arrayRequests"));
        data[index].hasLoggedIn = true;
        localStorage.setItem("arrayRequests", JSON.stringify(data));
      } else if (loginInfo === true && this.checked === true) {
        this.firstLogin = false;
      }

      if (loginInfo) {
        foundCode = true;
      }

      if (
        foundEmail == undefined ||
        foundPassword == undefined ||
        foundCode == undefined
      ) {
        this.notRegistered = true;
        this.formIsValid = false;
      }
    },
    sendRequest() {
      this.validateForm();

      if (this.formIsValid == false) {
        return;
      } else {
        const formData = {
          id: Math.random() * 3,
          email: this.email.val,
          password: this.password.val,
          classes: [],
        };

        this.$store.dispatch("storeUser", formData);

        let arrayUsers = this.$store.getters.returnUsers;
        localStorage.setItem("arrayUsers", JSON.stringify(arrayUsers));

        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        this.$router.push(`/board/${formData.id}`);
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem("arrayRequests")));
  },
};
</script>

<style scoped>
.form {
  height: 19rem;
  margin-left: 19rem;
  padding-top: 0.5rem;
  margin-bottom: 6rem;
  margin-top: 5.5rem;
  transition: all 0.3s ease;
}

h1 {
  color: rgb(55, 153, 55);
  margin-bottom: 0rem;
}

p {
  font-size: 1.2rem;
}

.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-box p {
  font-size: 1rem;
  margin-bottom: 0rem;
}

.check-login {
  display: flex;
  flex-direction: row;
}

.check-login p {
  margin-bottom: 0.5rem;
}

.check-login label {
  margin-top: 1.2rem;
  margin-left: 1rem;
}

.check-login input {
  margin-top: 1rem;
}

.input {
  width: 20rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  border-style: none;
  box-shadow: -2px 0px 5px rgb(56, 187, 56);
}

input:focus {
  outline: none;
}

label {
  font-size: 1.2rem;
}

.button {
  margin-left: 30rem;
  margin-top: 0rem;
  height: 2.5rem;
  width: 6rem;
}

.button p {
  color: white;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.invalid {
  border: 1px solid red;
  box-shadow: 0px 0px 5px red;
}

.adjustHeight {
  height: 25rem;
}
</style>
