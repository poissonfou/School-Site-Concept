<template>
  <base-form class="form">
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
        Enter the activation code provided to you by the school administration.
      </p>
      <label for="code">Code</label>
      <input type="text" name="code" />
    </div>

    <div class="input-box">
      <label for="email">Email</label>
      <input type="text" name="email" />
    </div>

    <div class="input-box">
      <label for="password">Password</label>
      <input type="text" name="password" />
    </div>

    <base-button class="button">
      <p>LOGIN</p>
    </base-button>
  </base-form>
</template>

<script>
import BaseForm from "../ui/BaseForm.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  data() {
    return {
      firstLogin: false,
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
</style>
