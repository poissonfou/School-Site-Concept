<template>
  <div class="main-div-form">
    <base-form class="form">
      <div v-if="!infoSent">
        <h1>Application Form</h1>
        <p class="p">Please enter the following information below.</p>
        <p>This data will only be used to enter in contact with you.</p>
        <form @submit.prevent="sendRequest()">
          <div class="input-box">
            <label for="parentName">Guardian's Name</label>
            <input
              type="text"
              name="parentName"
              id="parentName"
              v-model="parentName.val"
              :class="{ invalid: !parentName.isValid }"
              @blur="clearValidity('parentName')"
            />
            <p v-if="!parentName.isValid">Please enter the guardian's name</p>
          </div>

          <div class="input-box">
            <label for="studentName">Child's Name</label>
            <input
              type="text"
              name="studentName"
              id="studentName"
              v-model="studentName.val"
              :class="{ invalid: !studentName.isValid || studentName.exists }"
              @blur="clearValidity('studentName')"
            />
            <p v-if="!studentName.isValid">Please enter the student's name</p>
            <p v-else-if="studentName.exists">
              Child has already been registered
            </p>
          </div>

          <div class="input-box">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="email.val"
              :class="{ invalid: !email.isValid }"
              @blur="clearValidity('email')"
            />
            <p v-if="!email.isValid">Please enter a valid email</p>
          </div>

          <div class="input-box">
            <label for="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              v-model="phone.val"
              :class="{ invalid: !phone.isValid }"
              @blur="clearValidity('phone')"
            />
            <p v-if="!phone.isValid">Please enter a phone number</p>
          </div>

          <base-button class="button"><p>SEND</p></base-button>
        </form>
      </div>
      <div v-else>
        <h1>Infomation Sent!</h1>
        <p>
          We thank you for taking interest in our school and program. You will
          be contacted in three to five businnes days to schedule a metting in
          the school to provide futher details, tour the school and define a
          date for the application of the admission tests.
        </p>
        <p>
          While you wait, you can learn more about us on our
          <router-link to="home"> social media</router-link>
          profiles.
        </p>

        <p class="signature"><span>Caroline Dickman</span> School principle</p>

        <p>Your code: {{ code }}</p>
        <p>Your password: {{ password }}</p>

        <base-button class="button" @click="goHome()">
          <p>HOME</p>
        </base-button>
      </div>
    </base-form>
    <img src="../../assets/img_one.jpg" alt="" />
  </div>
</template>

<script>
import BaseForm from "../ui/BaseForm.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  data() {
    return {
      infoSent: false,
      formIsValid: true,
      code: null,
      password: null,
      id: 0,
      parentName: { val: "", isValid: true },
      studentName: { val: "", isValid: true, exists: false },
      email: { val: "", isValid: true },
      phone: { val: "", isValid: true },
    };
  },
  components: {
    BaseForm,
    BaseButton,
  },
  methods: {
    sendRequest() {
      this.validateForm();

      if (this.formIsValid == false) {
        document.querySelector(".form").style.height = "37rem";
        return;
      } else {
        this.code = Math.floor(Math.random() * 10);

        this.password = this.generatePassword();

        const formData = {
          id: Math.random() * 3,
          hasLoggedIn: false,
          code: this.code,
          parentName: this.parentName.val,
          studentName: this.studentName.val,
          email: this.email.val,
          phone: this.phone.val,
          password: this.password,
          classes: [],
          isLoggedIn: false,
        };

        let data = JSON.parse(localStorage.getItem("arrayUsers"));
        data.push(formData);

        localStorage.setItem("arrayUsers", JSON.stringify(data));

        this.infoSent = true;
        document.querySelector(".form").style.height = "27rem";
      }
    },
    validateForm() {
      this.formIsValid = true;
      if (this.parentName.val === "") {
        this.parentName.isValid = false;
        this.formIsValid = false;
      }
      if (this.studentName.val === "") {
        this.studentName.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "") {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.phone.val === "") {
        this.phone.isValid = false;
        this.formIsValid = false;
      }

      if (localStorage.length == 0) {
        localStorage.setItem("arrayUsers", JSON.stringify([]));
      }

      let arrayStorage = JSON.parse(localStorage.getItem("arrayUsers"));

      const found = arrayStorage.find(
        (e) => e.studentName == this.studentName.val
      );

      if (found != undefined) {
        this.studentName.exists = true;
        this.formIsValid = false;
      }
    },
    goHome() {
      this.$router.push("/home");
      window.scrollTo(0, 0);
    },
    setHeight() {
      if (!this.infoSent) {
        document.querySelector(".form").style.height = "30rem";
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    generatePassword() {
      let chars =
        "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let password = "";

      for (let i = 0; i <= 12; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 2);
      }

      return password;
    },
  },
  mounted() {
    this.setHeight();
  },
};
</script>

<style scoped>
a,
h1 {
  color: rgb(55, 153, 55);
}

span {
  font-style: italic;
  color: rgb(55, 153, 55);
  font-size: 1.3rem;
  margin-right: 0.5rem;
}

.form {
  transition: all 0.3s ease;
}

.signature {
  font-size: 0.8rem;
}

.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.input-box p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

input {
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

.main-div-form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

img {
  width: 28rem;
  height: 35rem;
  object-fit: cover;
}

.button {
  margin-left: 30rem;
  margin-top: 0rem;
  height: 2.5rem;
  width: 6rem;
  transition: all 0.2s ease;
}

.button p {
  color: white;
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.p {
  margin-bottom: 0rem;
}

p {
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  font-size: 1.2rem;
}

.invalid {
  border: 1px solid red;
  box-shadow: 0px 0px 5px red;
}

.invalidForm {
  height: 50rem;
}
</style>
