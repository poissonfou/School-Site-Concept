<template>
  <div>
    <div class="grades">
      <div>
        <h1>Your mean grade</h1>
        <p>Click for more information</p>
      </div>
      <div class="grade-score">
        <h1>100</h1>
      </div>
    </div>

    <div>
      <h1 class="reminder-title">Reminders</h1>
      <div class="reminders">
        <div class="reminder-info">
          <h1>Math Exam</h1>
          <p>on 12/12/2023</p>
        </div>
        <div class="color-block"></div>
      </div>
    </div>

    <h1 class="contact-title">Contacts</h1>
    <div class="contact">
      <div @click="showContacts('Teachers')">
        <h1>Teachers</h1>
      </div>
      <div @click="showContacts('School')">
        <h1>School</h1>
      </div>
    </div>

    <div>
      <div v-if="teacherContact == 'Teachers'">
        <ul>
          <li>lihvoudsvih 26516595</li>
          <li>lihvoudsvih 26516595</li>
          <li>lihvoudsvih 26516595</li>
        </ul>
      </div>
      <div v-if="teacherContact == 'School'">
        <ul>
          <li>
            lihvoudsvih
            <p>Open 9a.m - 5p.m</p>
          </li>
          <li>
            lihvoudsvih
            <p>Open 9a.m - 5p.m</p>
          </li>
          <li>
            lihvoudsvih
            <p>Open 9a.m - 5p.m</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherContact: null,
    };
  },

  methods: {
    showContacts(val) {
      this.teacherContact = val;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.grades {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 0px 5px rgb(56, 187, 56);
  height: 13rem;
  width: 50rem;
  margin-left: 15rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding-top: 1.5rem;
  border-radius: 1rem;
}

.grades h1 {
  font-size: 3rem;
  color: rgb(56, 187, 56);
  margin-bottom: 0.5rem;
}

.grades p {
  font-size: 1.5rem;
  margin-top: 0rem;
  margin-left: 0.5rem;
}

.grades:hover {
  cursor: pointer;
}

.grade-score {
  width: 10rem;
  height: 10rem;
  border-radius: 6rem;
  border: solid 0.8rem black;
}

.grade-score h1 {
  margin-left: 0.5rem;
  margin-top: 2rem;
  font-size: 5rem;
  color: rgb(56, 187, 56);
}

.reminder-title,
.contact-title {
  font-size: 3rem;
  margin-left: 15rem;
  margin-bottom: 0rem;
  color: rgb(56, 187, 56);
}

.reminders {
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px rgb(56, 187, 56);
  height: 7rem;
  width: 50rem;
  margin-left: 15rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  border-radius: 1rem;
}

.reminders:hover {
  cursor: pointer;
}

.reminders h1 {
  color: rgb(56, 187, 56);
  font-size: 3rem;
  position: absolute;
  margin-left: -15rem;
  padding-bottom: 2rem;
  width: 30rem;
}

.reminder-info {
  position: absolute;
  margin-left: 20rem;
}

.reminder-info p {
  margin-left: 1rem;
  position: absolute;
  width: 30rem;
  margin-top: 3.4rem;
  color: grey;
  font-size: 1.5rem;
}

.color-block {
  width: 8rem;
  height: 7rem;
  background-color: red;
  margin-left: 42rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.contact div {
  background-color: rgb(56, 187, 56);
  color: white;
  width: 11rem;
  height: 4rem;
  margin-bottom: 2rem;
}

.contact div h1 {
  margin-left: 1.5rem;
  margin-top: 1rem;
}

.contact div:hover {
  cursor: pointer;
}

.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40rem;
  margin-left: 20rem;
  margin-top: 2rem;
}

ul {
  list-style: none;
  margin-left: 22rem;
}

ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2rem;
  border-bottom: solid 0.1rem rgb(56, 187, 56);
  width: 35rem;
  padding-top: 1rem;
  font-size: 1.5rem;
}

ul li p {
  margin-top: 0.2rem;
  font-size: 1.2rem;
}
</style>
