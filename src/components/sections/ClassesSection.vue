<template>
  <section>
    <base-popup v-if="hasClass" class="warning">
      <p>This class has already been registered!</p>
    </base-popup>

    <div class="tabs">
      <h1
        @click="getMyClasses(false)"
        :class="!showMyClasses ? 'selected' : ''"
      >
        Classes
      </h1>
      <h1 @click="getMyClasses(true)" :class="showMyClasses ? 'selected' : ''">
        My Classes
      </h1>
    </div>

    <div class="class-list" v-if="showMyClasses == false">
      <ul v-for="classItem in filterClasses" :key="classItem.name">
        <li>
          <div class="info">
            <div class="teacher">
              <h2>{{ classItem.name }}|</h2>
              <p>{{ classItem.teacher }}</p>
            </div>

            <div class="details">
              <div>
                <p><span>Time: </span>{{ classItem.hour }}</p>
                <p><span>Room:</span> {{ classItem.room }}</p>
              </div>
              <div>
                <p>{{ classItem.day }}</p>
                <p><span>Grades: </span>{{ classItem.for }}</p>
              </div>
            </div>
          </div>

          <base-button @click="addClass(classItem.name)"> Enroll </base-button>
        </li>
      </ul>
    </div>
    <div v-else class="class-list" id="myClassesSection">
      <div v-if="!noClasses">
        <ul v-for="classItem in myClasses" :key="classItem.name">
          <li>
            <div class="info">
              <div class="teacher">
                <h2>{{ classItem.name }}|</h2>
                <p>{{ classItem.teacher }}</p>
              </div>

              <div class="details">
                <div>
                  <p><span>Time: </span>{{ classItem.hour }}</p>
                  <p><span>Room:</span> {{ classItem.room }}</p>
                </div>
                <div>
                  <p>{{ classItem.day }}</p>
                  <p><span>Grades: </span>{{ classItem.for }}</p>
                </div>
              </div>
            </div>

            <base-button @click="removeClass(classItem.name)">
              Remove
            </base-button>
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="no-classes">You're not enrolled in any classes</p>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import BasePopup from "../ui/BasePopup.vue";

export default {
  data() {
    return {
      classes: this.$store.getters.returnClasses,
      showMyClasses: false,
      noClasses: false,
      myClasses: null,
      userId: this.$route.params.userId,
      hasClass: false,
    };
  },
  components: {
    BaseButton,
    BasePopup,
  },

  methods: {
    getMyClasses(val) {
      if (val == false) {
        this.showMyClasses = false;
        return;
      }

      this.showMyClasses = true;
      let userInfo = JSON.parse(localStorage.getItem("arrayUsers"));

      let userIndex = userInfo.findIndex((e) => e.id == this.userId);

      let classes = userInfo[userIndex].classes;

      if (classes.length == 0) {
        this.noClasses = true;
        return;
      }

      this.myClasses = classes;
    },
    verifyClass(className) {
      let userInfo = JSON.parse(localStorage.getItem("arrayUsers"));

      let userIndex = userInfo.findIndex((e) => e.id == this.userId);

      let idx;

      if (userInfo[userIndex].classes.length != 0) {
        try {
          for (let i = 0; i <= this.classes.length; i++) {
            if (userInfo[userIndex].classes[i].name == className) {
              idx = i;
              break;
            }
          }

          if (idx != undefined) {
            window.scrollTo(0, top);
            this.hasClass = true;
          }

          setTimeout(() => {
            this.hasClass = false;
          }, 2000);
        } catch (e) {
          return (this.hasClass = false);
        }
      }
    },
    addClass(className) {
      this.verifyClass(className);

      if (this.hasClass) {
        return;
      }

      let userInfo = JSON.parse(localStorage.getItem("arrayUsers"));

      let dataClasses = this.classes.find((e) => e.name == className);

      let userIndex = userInfo.findIndex((e) => e.id == this.userId);

      userInfo[userIndex].classes.push(dataClasses);

      localStorage.setItem("arrayUsers", JSON.stringify(userInfo));
    },
    removeClass(className) {
      console.log(className);
      let userInfo = JSON.parse(localStorage.getItem("arrayUsers"));

      let userIndex = userInfo.findIndex((e) => e.id == this.userId);

      let idx;

      for (let i = 0; i <= this.classes.length; i++) {
        if (userInfo[userIndex].classes[i].name == className) {
          idx = i;
          break;
        }
      }

      userInfo[userIndex].classes.splice(idx, 1);

      localStorage.setItem("arrayUsers", JSON.stringify(userInfo));
    },
    getDays() {
      let grades = "";
      let days = "";
      let data = this.classes;

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].for.length; j++) {
          days += data[i].for[j] + "|";
        }
        for (let y = 0; y < data[i].day.length; y++) {
          grades += data[i].day[y] + "|";
        }

        data[i].for = days.replaceAll("|", ", ");
        data[i].day = grades.replaceAll("|", ", ");

        days = "";
        grades = " ";
      }
    },
  },
  computed: {
    filterClasses() {
      let userInfo = JSON.parse(localStorage.getItem("arrayUsers"));
      let userIndex = userInfo.findIndex((e) => e.id == this.userId);

      let userGrade = userInfo[userIndex].grade;
      let filteredClasses = [];
      let strg;

      for (let i = 0; i < this.classes.length; i++) {
        strg = this.classes[i].for.toString();

        let gradeLower = userGrade.toLowerCase();

        if (strg.includes(gradeLower)) {
          filteredClasses.push(this.classes[i]);
        }
      }

      return filteredClasses;
    },
  },
  mounted() {
    this.getDays();
  },
};
</script>

<style scoped>
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5em;
}

h2 {
  color: rgb(0, 7, 92);
}

.tabs {
  display: flex;
  color: rgb(0, 7, 92);
}

.tabs h1:hover {
  cursor: pointer;
}

.tabs h1 {
  margin: 0;
  padding: 1em 1em 0.2em 1em;
}

.tabs h1:first-child {
  margin-right: 2em;
}

.selected {
  border-bottom: rgb(0, 7, 92) 1px solid;
}

ul {
  list-style: none;
  padding: 0em;
}

li {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgb(0, 7, 92);
  width: 40em;
  padding: 1em 0em;
}

.teacher {
  display: flex;
  align-items: center;
}

.teacher h2 {
  margin-bottom: 0em;
}

.teacher p {
  margin-bottom: -0.2em;
  margin-left: 0.1em;
  font-size: 1.2rem;
}

.details div:first-child {
  display: flex;
}

.details div:first-child p:first-child {
  margin-right: 1em;
}

.details p {
  margin-bottom: 0em;
  font-size: 1.2rem;
}

span {
  margin-right: 0.2em;
  color: rgb(0, 7, 92);
  font-weight: bold;
  font-size: 1.2rem;
}

button {
  height: 2em;
  width: 5em;
  color: white;
  font-size: 1.2rem;
  margin-top: 3em;
}

@media (max-width: 800px) {
  li {
    width: 35em;
  }
}

@media (max-width: 675px) {
  span {
    font-size: 1.1rem;
  }

  li {
    width: 28em;
  }

  .teacher p {
    font-size: 1rem;
    margin-bottom: -0.5em;
  }

  .details p {
    font-size: 1rem;
  }
}

.no-classes {
  margin-left: 6.7rem;
  font-size: 1.5rem;
}

.warning p {
  font-size: 1.5rem;
}
</style>
