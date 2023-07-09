<template>
  <div class="main-div-form">
    <base-form class="form">
      <div v-if="!infoSent">
        <h1>Application Form</h1>
        <p class="p">Please enter the following information below.</p>
        <p>This data will only be used to enter in contact with you.</p>
        <form>
          <div class="input-box">
            <label for="parentName">Guardian's Name</label>
            <input type="text" name="parentName" />
          </div>

          <div class="input-box">
            <label for="studentName">Child's Name</label>
            <input type="text" name="studentName" />
          </div>

          <div class="input-box">
            <label for="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div class="input-box">
            <label for="phone">Phone</label>
            <input type="text" name="phone" />
          </div>

          <base-button class="button" @click="sendInfo()"
            ><p>SEND</p></base-button
          >
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
    };
  },
  components: {
    BaseForm,
    BaseButton,
  },
  methods: {
    sendInfo() {
      this.infoSent = true;
      document.querySelector(".form").style.height = "25rem";
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

.signature {
  font-size: 0.8rem;
}

.input-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
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
</style>
