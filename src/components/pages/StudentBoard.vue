<template>
  <main>
    <div class="body">
      <div class="main-container">
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
              <h1 class="no-grade-warning">
                You're not enrolled in any classes
              </h1>
            </div>
            <div v-else class="grade-list">
              <ul v-for="grades in returnGrades" :key="grades.name">
                <li>
                  <div @click="showDetails(grades.name)">
                    {{ grades.name }}
                    <p>Grade: {{ grades.grade }}</p>
                  </div>
                  <div v-if="details == grades.name">
                    <div>
                      {{ grades.teacher }}<span>|{{ grades.hour }}</span>
                    </div>
                    <p>Room: {{ grades.room }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="assigments">
          <h1 class="assigments-title">Assignments</h1>
          <div v-if="returnTasks.length == 0" class="no-assigments">
            <p>No assignments registered!</p>
          </div>
          <div v-else>
            <div
              v-for="assigment in returnTasks"
              :key="assigment.name"
              class="assigment"
            >
              <div
                class="color-block"
                :style="'background-color:' + assigment.color"
              ></div>
              <div class="assigment-info">
                <h1>{{ assigment.name }} Exam</h1>
                <p>on 12/12/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contacts">
      <div v-if="showSchoolContact">
        <ul>
          <li v-for="contact in schoolInfo" :key="contact.name">
            {{ contact.name }}
            <p>{{ contact.phone }}</p>
          </li>
        </ul>
      </div>
      <p @click="showContacts()" class="help">Need help?</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      showSchoolContact: false,
      userId: this.$route.params.userId,
      showGrades: false,
      noGrades: false,
      details: null,
    };
  },

  methods: {
    showContacts() {
      this.showSchoolContact = !this.showSchoolContact;
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
    showDetails(className) {
      this.details = this.details == className ? null : className;
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

      return userDataClasses;
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
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-container {
  width: 40em;
  display: flex;
  flex-direction: column;
  padding: 5em 0em;
}

.grades {
  display: flex;
  margin-left: 5em;
}

.grades h1 {
  font-size: 2.4rem;
  color: rgb(0, 7, 92);
}

.grades h1 {
  margin-top: 1em;
  margin-bottom: 0.5rem;
}

.grades p {
  font-size: 1.5rem;
  margin-top: 0rem;
}

.grades:hover {
  cursor: pointer;
}

.grade-score {
  width: 9rem;
  height: 9rem;
  border-radius: 6rem;
  border: solid 0.8rem;
  border-color: black 50%;
  margin-left: 1em;
}

.grade-score h1 {
  text-align: center;
  margin-top: 0.3em;
  font-size: 5rem;
  color: rgb(0, 7, 92);
}

ul {
  list-style: none;
  padding: 0;
}

.main-container ul li {
  box-shadow: -3px 2px 5px black;
  border-radius: 3px;
  padding: 0.5em;
}

.main-container ul li:hover {
  cursor: pointer;
}

.main-container ul li div {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  font-weight: bold;
  color: rgb(0, 7, 92);
}

.main-container ul li p,
.main-container ul li span {
  color: black;
  font-weight: 500;
  font-size: 1.1rem;
}

.contacts {
  margin-top: 2em;
  margin-left: 1em;
}

.contacts div ul li p {
  color: rgb(0, 7, 92);
  font-weight: bold;
}

.contacts .help {
  width: 5em;
  height: 2rem;
}

.contacts p:hover {
  cursor: pointer;
}

.contacts div {
  position: absolute;
  margin-top: -15em;
}

.contacts div ul {
  background-color: white;
  box-shadow: -1px 2px 3px black;
  border-radius: 5px;
  padding: 0.2em;
  width: 15em;
}

.contacts div ul li {
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  font-size: 0.8rem;
  padding: 0.1em;
  align-items: center;
  font-weight: bold;
  color: rgb(0, 7, 92);
}

.contacts div ul li p {
  color: black;
  font-weight: 500;
  margin-left: 0.5em;
}

.assigments {
  display: flex;
  flex-direction: column;
}

.no-assigments {
  box-shadow: -1px 2px 3px black;
  padding: 3em 10em;
  border-radius: 3px;
  text-align: center;
}

.no-assigments p {
  font-size: 1.5rem;
}

.assigments-title {
  font-size: 2.5rem;
  color: rgb(0, 7, 92);
}

.assigment {
  display: flex;
  flex-direction: row;
  width: 36em;
  box-shadow: -2px 2px 5px rgb(0, 7, 92);
  border-radius: 3px;
  margin-top: 1em;
  padding: 0em 4em 0em 0em;
}

.assigment:hover {
  cursor: pointer;
}

.assigment h1 {
  color: rgb(0, 7, 92);
  font-size: 1.5rem;
  margin: 0;
}

.assigment-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  align-items: center;
}

.assigment-info p {
  color: grey;
  font-size: 1.2rem;
}

.color-block {
  width: 3rem;
  background-color: red;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.no-grade-warning {
  margin-left: 3rem;
}

@media (max-width: 700px) {
  .main-container {
    width: 29.5em;
  }

  .grades {
    margin-left: 1em;
  }

  .grades h1 {
    font-size: 2rem;
  }

  .grade-score h1 {
    font-size: 5rem;
  }

  .grade-score {
    margin-left: 0.5em;
  }

  .assigment {
    width: 25.5em;
  }

  .assigments-title {
    font-size: 2rem;
  }

  .assigment h1 {
    font-size: 1.3rem;
  }
}
</style>
