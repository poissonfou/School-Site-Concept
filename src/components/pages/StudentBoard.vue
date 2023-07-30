<template>
  <div>
    <div>
      <div class="grades" @click="showStudentGrades()">
        <div>
          <h1>Your mean grade</h1>
          <p>Click for more information</p>
        </div>
        <div class="grade-score">
          <h1 class="grade">{{ averageGrades }}</h1>
        </div>
      </div>
      <div v-if="showGrades">
        <div v-if="noGrades">
          <h1 class="no-grade-warning">You're not enrolled in any classes</h1>
        </div>
        <div v-else class="grade-list">
          <ul v-for="grades in returnGrades" :key="grades.name">
            <li>
              {{ grades.name }}
              <p>Grade: {{ grades.grade }}</p>
            </li>
          </ul>
        </div>
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
      <div @click="showTeacherContacts()">
        <h1>Teachers</h1>
      </div>
      <div @click="showSchoolContacts()">
        <h1>School</h1>
      </div>
    </div>

    <div>
      <div v-for="teacher in teacherInfo" :key="teacher.name" class="contacts">
        <div v-if="teacherContact">
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
      <div v-for="contact in schoolInfo" :key="contact.name" class="contacts">
        <div v-if="schoolContact">
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
  data() {
    return {
      teacherContact: false,
      schoolContact: false,
      userId: this.$route.params.userId,
      noTests: false,
      showGrades: false,
      noGrades: false,
    };
  },

  methods: {
    showTeacherContacts() {
      if (this.teacherContact == true) {
        this.teacherContact = false;
        return;
      }
      this.schoolContact = false;
      this.teacherContact = true;
    },
    showSchoolContacts() {
      if (this.schoolContact == true) {
        this.schoolContact = false;
        return;
      }
      this.teacherContact = false;
      this.schoolContact = true;
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
    changeGrade() {
      this.noGrades = true;
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

      if (userDataClasses.length == 0) {
        this.changeGrade();
        return null;
      }

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
  box-shadow: 0px 0px 5px rgb(0, 7, 92);
  height: 13rem;
  width: 35rem;
  margin-left: 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  padding-top: 1.5rem;
  border-radius: 1rem;
}

.grades h1 {
  font-size: 2.2rem;
  color: rgb(0, 7, 92);
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
  color: rgb(0, 7, 92);
}

.reminder-title,
.contact-title {
  font-size: 2.5rem;
  margin-left: 1rem;
  margin-bottom: 0rem;
  color: rgb(0, 7, 92);
}

.reminders {
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px rgb(0, 7, 92);
  height: 6rem;
  width: 35rem;
  margin-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  border-radius: 1rem;
}

.reminders:hover {
  cursor: pointer;
}

.reminders h1 {
  color: rgb(0, 7, 92);
  font-size: 2.5rem;
  position: absolute;
  margin-left: -14rem;
  margin-top: 1.5rem;
  padding-bottom: 2rem;
  width: 20rem;
}

.reminder-info {
  position: absolute;
  margin-left: 20rem;
}

.reminder-info p {
  margin-left: 3rem;
  position: absolute;
  width: 12rem;
  margin-top: 2rem;
  color: grey;
  font-size: 1.5rem;
}

.color-block {
  width: 3rem;
  height: 6rem;
  background-color: red;
  margin-left: 0.02rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.contact div {
  background-color: rgb(0, 7, 92);
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
  width: 30rem;
  margin-left: 2.7rem;
  margin-top: 2rem;
}

ul {
  list-style: none;
  margin-left: 0.5rem;
}

ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2rem;
  border-bottom: solid 0.1rem rgb(0, 7, 92);
  width: 30rem;
  padding-top: 1rem;
  font-size: 1.2rem;
}

ul li p {
  margin-top: 0.2rem;
  font-size: 1.1rem;
}

#no-reminder-msg {
  margin-left: 12rem;
  font-size: 2rem;
}

.no-grade-warning {
  margin-left: 3rem;
}

@media (min-width: 576px) {
  .grades {
    margin-left: 6rem;
  }

  ul {
    margin-left: 5.9rem;
  }

  .contact {
    margin-left: 8.5rem;
  }

  .reminder-title,
  .contact-title {
    margin-left: 5rem;
  }

  .reminders {
    margin-left: 5rem;
  }

  #no-reminder-msg {
    margin-left: 17rem;
  }

  .no-grade-warning {
    margin-left: 8rem;
  }
}

@media (min-width: 768px) {
  .grades {
    margin-left: 10.5rem;
    width: 40rem;
  }

  ul {
    margin-left: 12rem;
  }

  .contact {
    margin-left: 17rem;
  }

  .reminder-title,
  .contact-title {
    margin-left: 10rem;
  }

  .reminders {
    margin-left: 13rem;
  }

  .contacts div ul {
    margin-left: 14.5rem;
  }

  #no-reminder-msg {
    margin-left: 24rem;
  }

  .no-grade-warning {
    margin-left: 15rem;
  }
}

@media (min-width: 992px) {
  .grades {
    margin-left: 17rem;
  }

  ul {
    margin-left: 17rem;
  }

  ul li {
    width: 35rem;
    font-size: 1.5rem;
  }

  ul li p {
    font-size: 1.2rem;
  }

  .contact {
    margin-left: 21rem;
  }

  .reminder-title,
  .contact-title {
    margin-left: 15rem;
  }

  .reminders {
    margin-left: 19rem;
  }

  .contacts div ul {
    margin-left: 16rem;
  }

  #no-reminder-msg {
    margin-left: 30rem;
  }

  .no-grade-warning {
    margin-left: 21.5rem;
  }
}

@media (min-width: 1200px) {
  .grades {
    margin-left: 20.5rem;
  }

  ul {
    margin-left: 20.5rem;
  }

  .reminder-title,
  .contact-title {
    margin-left: 20rem;
  }

  .reminders {
    margin-left: 22rem;
  }

  .contact {
    margin-left: 25rem;
  }

  .contacts div ul {
    margin-left: 20rem;
  }

  #no-reminder-msg {
    margin-left: 35rem;
  }

  .no-grade-warning {
    margin-left: 25rem;
  }
}
</style>
