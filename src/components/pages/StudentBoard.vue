<template>
  <div>
    <div @click="showStudentGrades()">
      <div class="grades">
        <div>
          <h1>Your mean grade</h1>
          <p>Click for more information</p>
        </div>
        <div class="grade-score">
          <h1 class="grade">{{ averageGrades }}</h1>
        </div>
      </div>
      <div v-if="showGrades">
        <ul v-for="grades in returnGrades" :key="grades.name">
          <li>
            {{ grades.name }}
            <p>Grade: {{ grades.grade }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h1 class="reminder-title">Reminders</h1>
      <div v-if="noTests" id="no-reminder-msg">
        <p>No Reminders</p>
      </div>
      <div v-else>
        <div v-for="test in returnTasks" :key="test.name" class="reminders">
          <div class="reminder-info">
            <h1>{{ test.name }} Exam</h1>
            <p>on 12/12/2023</p>
          </div>
          <div
            class="color-block"
            :style="'background-color:' + test.color"
          ></div>
        </div>
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
      <div v-for="teacher in teacherInfo" :key="teacher.name">
        <div v-if="teacherContact == 'Teachers'">
          <ul>
            <li>
              {{ teacher.name }} ({{ teacher.subject }}) |
              <p>{{ teacher.phone }}</p>
              |
              <p>{{ teacher.officeHours }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div v-for="contact in schoolInfo" :key="contact.name">
        <div v-if="teacherContact == 'School'">
          <ul>
            <li>
              {{ contact.name }}
              <p>{{ contact.phone }}</p>
              <p>{{ contact.officeHours }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      id: this.userId,
    };
  },
  data() {
    return {
      teacherContact: null,
      userId: this.$route.params.userId,
      noTests: false,
      showGrades: false,
    };
  },

  methods: {
    showContacts(val) {
      this.teacherContact = val;
    },
    setColor() {
      if (this.averageGrades < 50) {
        document.querySelector(".grade-score").style.borderColor = "red";
      } else if (this.averageGrades >= 50 && this.averageGrades < 80) {
        document.querySelector(".grade-score").style.borderColor = "yellow";
      } else if (this.averageGrades >= 80) {
        document.querySelector(".grade-score").style.borderColor = "green";
      }
    },
    changeTest() {
      this.noTests = true;
    },
    showStudentGrades() {
      if (this.showGrades == false) {
        this.showGrades = true;
        return;
      }
      this.showGrades = false;
    },
  },
  computed: {
    teacherInfo() {
      return this.$store.getters.returnTeachers;
    },
    schoolInfo() {
      return this.$store.getters.returnSchoolData;
    },
    averageGrades() {
      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let userIndex = data.findIndex((e) => e.id == this.userId);
      let userDataClasses = data[userIndex].classes;

      let grades = [];
      let sum = 0;
      let avrg;

      if (userDataClasses.length != 0) {
        for (let i = 0; i < userDataClasses.length; i++) {
          grades.push(userDataClasses[i].grade);
          sum += grades[i];
        }

        avrg = sum / grades.length;

        return Math.floor(avrg);
      }

      return 0;
    },
    returnTasks() {
      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let userIndex = data.findIndex((e) => e.id == this.userId);
      let userDataClasses = data[userIndex].classes;
      let classesTest = [];

      if (userDataClasses.length != 0) {
        for (let i = 0; i < userDataClasses.length; i++) {
          console.log(i);
          if (userDataClasses[i].hasATest == true) {
            classesTest.push(userDataClasses[i]);
          }
        }
        return classesTest;
      }

      this.changeTest();
      return null;
    },
    returnGrades() {
      let data = JSON.parse(localStorage.getItem("arrayUsers"));
      let userIndex = data.findIndex((e) => e.id == this.userId);
      let userDataClasses = data[userIndex].classes;

      return userDataClasses;
    },
  },
  mounted() {
    this.setColor();
  },
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
  margin-left: 3rem;
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

#no-reminder-msg {
  margin-left: 34rem;
  font-size: 2rem;
}
</style>
