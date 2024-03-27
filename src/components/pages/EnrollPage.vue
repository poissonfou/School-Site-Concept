<template>
  <div class="main-div-form">
    <base-form class="form">
      <div v-if="!infoSent">
        <div class="top">
          <h1>Application Form</h1>
          <p>Please enter the following information below.</p>
          <p>This data will only be used to enter in contact with you.</p>
        </div>
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

          <label for="grades"> Select a grade</label>
          <select name="grades" id="grades">
            <option value="Primary-School">Primary-School</option>
            <option value="Middle-School">Middleschool</option>
            <option value="Highschool">Highschool</option>
          </select>

          <base-button class="button">Send</base-button>
        </form>
      </div>
      <div v-else class="info-sent">
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

        <div class="login-info">
          <p>Your code: {{ code }}</p>
          <p>Your password: {{ password }}</p>
        </div>
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
        return;
      } else {
        this.code = Math.floor(Math.random() * 10);

        this.password = this.generatePassword();

        let grade = document.querySelector("#grades").value;

        const formData = {
          id: Math.random() * 3,
          hasLoggedIn: false,
          code: this.code,
          parentName: this.parentName.val,
          studentName: this.studentName.val,
          email: this.email.val,
          phone: this.phone.val,
          password: this.password,
          grade,
          classes: [],
          isLoggedIn: false,
        };

        let data = JSON.parse(localStorage.getItem("arrayUsers"));
        data.push(formData);

        localStorage.setItem("arrayUsers", JSON.stringify(data));

        this.infoSent = true;
        document.querySelector(".form").style.height = "29rem";
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
    setHeight() {
      if (!this.infoSent) {
        document.querySelector(".form").style.height = "35rem";
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
        password += chars.substring(randomNumber, randomNumber + 2).trim();
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
p {
  margin: 0;
  margin-bottom: 0.2em;
}

.main-div-form {
  display: flex;
  justify-content: space-between;
}

form {
  margin-top: 1em;
}

img {
  width: 40%;
  object-fit: cover;
}

.form {
  margin: 0rem;
  padding: 2em 5em;
}

.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 25em;
}

input {
  border-radius: 2px;
  border-style: none;
  box-shadow: -2px 1px 2px rgb(0, 7, 92);
  padding: 0.7em;
  width: 25em;
}

.input-box p {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}

label {
  font-size: 1.2rem;
}

.button {
  padding: 0.5em 1em;
  color: white;
  font-size: 1.3rem;
  margin-left: 10%;
}

a,
h1 {
  color: rgb(0, 7, 92);
}

span {
  font-style: italic;
  color: rgb(0, 7, 92);
}

.signature {
  font-size: 1.2rem;
  margin-top: 1em;
}

.invalid {
  border: 1px solid red;
  box-shadow: 0px 0px 5px red;
}

#grades {
  border-radius: 3px;
  border: solid 0.1rem rgb(0, 7, 92);
  font-size: 1rem;
  padding: 0.5em;
  margin-left: 0.2em;
}

.info-sent {
  font-size: 1.2em;
  padding: 5em 2em;
}

.info-sent h1 {
  margin: 0;
  margin-bottom: 0.5em;
}

.login-info {
  margin-top: 1em;
}

@media (max-width: 950px) {
  .main-div-form {
    width: 100%;
    justify-content: center;
  }

  img {
    display: none;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 700px) {
  .form {
    padding: 2em 0em;
  }
}
</style>
