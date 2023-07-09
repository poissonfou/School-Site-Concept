<template>
  <div class="main-div-form">
    <base-form class="form">
      <h1>Application Form</h1>
      <p class="p">Please enter the following information below.</p>
      <p>This data will only be used to enter in contact with you.</p>
      <form action="POST">
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

        <base-button class="button"><p>SEND</p></base-button>
      </form>
    </base-form>
    <img src="../../assets/img_one.jpg" alt="" />
  </div>
</template>

<script>
import BaseForm from "../ui/BaseForm.vue";
import BaseButton from "../ui/BaseButton.vue";

export default {
  components: {
    BaseForm,
    BaseButton,
  },
};
</script>

<style scoped>
h1 {
  color: rgb(55, 153, 55);
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
