<template>
  <base-form class="form">
    <form @submit.prevent="sendRequest()">
      <h1>Login</h1>
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

      <div class="input-box" v-if="firstLogin">
        <p>
          Enter the activation code provided to you by the school
          administration.
        </p>
        <label for="code">Code</label>
        <input type="text" name="code" v-model="code.val" />
      </div>

      <div class="input-box">
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          v-model="email.val"
          :class="{ invalid: !email.isValid }"
          @blur="clearValidity('email')"
        />
      </div>

      <div class="input-box">
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          v-model="password.val"
          :class="{ invalid: !password.isValid }"
          @blur="clearValidity('password')"
        />
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
      firstLogin: false,
      formIsValid: true,
      code: { val: "", isValid: true, exists: true },
      email: { val: "", isValid: true, exists: true },
      password: { val: "", isValid: true, exists: true },
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
        this.firstLogin = true;
        let form = document.querySelector(".form");
        form.style.height = "28rem";
      } else {
        this.firstLogin = false;
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
      }

      // let arrayStorage = JSON.parse(localStorage.getItem("arrayRequests"));

      // const found = arrayStorage.find(
      //   (e) => e.studentName == this.studentName.val
      // );

      // if (found != undefined) {
      //   this.studentName.exists = true;
      //   this.formIsValid = false;
      // }
    },
    sendRequest() {
      this.validateForm();

      if (this.formIsValid == false) {
        return;
      } else {
        const formData = {
          email: this.email.val,
          password: this.password.val,
        };

        this.$store.dispatch("storeUser", formData);

        let arrayUsers = this.$store.getters.returnUsers;
        localStorage.setItem("arrayUsers", JSON.stringify(arrayUsers));
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
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

.input-box input {
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
</style>
