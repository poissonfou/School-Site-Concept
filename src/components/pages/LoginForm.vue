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
        <input
          type="text"
          name="code"
          class="input"
          :class="{ invalid: !code.isValid }"
          @blur="clearValidity('code')"
          v-model="code.val"
        />
        <p v-if="!code.isValid">Code not found, please try again</p>
      </div>

      <div class="input-box">
        <label for="email">Email</label>
        <input
          type="email"
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
      id: "",
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
      if (this.firstLogin == true) {
        this.firstLogin = null;
      }

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
      let arrayStorage = JSON.parse(localStorage.getItem("arrayUsers"));

      const foundEmail = arrayStorage.find((e) => e.email == this.email.val);

      let foundCode = arrayStorage.find((e) => e.code == this.code.val);

      const index = arrayStorage.findIndex(
        (e) => e.password == this.password.val
      );

      let loginInfo;

      try {
        loginInfo = arrayStorage[index].hasLoggedIn;
      } catch (e) {
        console.log(e);
        this.formIsValid = false;
        this.password.isValid = false;
        return;
      }

      if (loginInfo === false && this.checked === false) {
        this.firstLogin = true;
        this.formIsValid = false;
        return;
      } else if (loginInfo === false && foundCode) {
        const data = JSON.parse(localStorage.getItem("arrayUsers"));
        data[index].hasLoggedIn = true;
        localStorage.setItem("arrayUsers", JSON.stringify(data));
      } else if (loginInfo === true && this.checked === true) {
        this.firstLogin = false;
      }

      if (loginInfo) {
        foundCode = true;
      }

      if (foundEmail == undefined) {
        this.formIsValid = false;
        this.email.isValid = false;
        this.notRegistered = true;
        return;
      } else if (foundCode == undefined) {
        this.notRegistered = true;
        this.code.isValid = false;
        this.formIsValid = false;
        return;
      }
    },
    sendRequest() {
      this.validateForm();

      if (this.formIsValid == false) {
        return;
      } else {
        const data = JSON.parse(localStorage.getItem("arrayUsers"));

        const index = data.findIndex((e) => e.password == this.password.val);

        data[index].isLoggedIn = true;

        localStorage.setItem("arrayUsers", JSON.stringify(data));

        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        this.id = data[index].id;

        this.$router.push(`/board/${data[index].id}`);
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
  },
  computed: {
    returnId() {
      let log = JSON.parse(localStorage.getItem("isLoggedIn"));
      if (log == true) {
        const data = JSON.parse(localStorage.getItem("arrayUsers"));

        const index = data.findIndex((e) => e.isLoggedIn == true);

        return data[index].id;
      } else {
        return 0;
      }
    },
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem("arrayUsers")));
  },
};
</script>

<style scoped>
.form {
  height: 19rem;
  margin-left: 0rem;
  box-shadow: none;
  width: 25rem;
  padding-left: 5rem;
  margin-bottom: 6rem;
  margin-top: 5.5rem;
}

h1 {
  color: rgb(0, 7, 92);
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
  box-shadow: -2px 0px 5px rgb(0, 7, 92);
}

input:focus {
  outline: none;
}

label {
  font-size: 1.2rem;
}

.button {
  margin-left: 20rem;
  margin-top: 2rem;
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

@media (min-width: 576px) {
  .form {
    margin-left: 7.2rem;
    box-shadow: 0px 0px 5px rgb(0, 7, 92);
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .button {
    margin-left: 18rem;
  }
}

@media (min-width: 768px) {
  .form {
    width: 35rem;
    margin-left: 9.2rem;
    height: 20rem;
  }

  .button {
    margin-left: 28rem;
  }

  .input {
    width: 25rem;
  }

  p {
    font-size: 1.5rem;
  }

  label {
    font-size: 1.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-top: 0rem;
  }
}

@media (min-width: 992px) {
  .form {
    margin-left: 15.6rem;
  }
}

@media (min-width: 1200px) {
  .form {
    margin-left: 20.5rem;
  }
}
</style>
