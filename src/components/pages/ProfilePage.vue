<template>
  <div class="main-profile-div">
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
      <base-button class="button" id="password">
        Redefine Password
      </base-button>
      <base-button class="button" id="update"> Update Info </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";

export default {
  data() {
    return {
      userId: "Emerson",
    };
  },
  components: {
    BaseButton,
  },
  computed: {
    userInfo() {
      let data = JSON.parse(localStorage.getItem("arrayRequests"));
      let idx = data.findIndex((e) => e.studentName == this.userId);
      return [data[idx]];
    },
  },
  mounted() {},
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
</style>
