<template>
  <section>
    <base-warning v-if="hasClass" class="warning">
      <p>This class has already been registered!</p>
    </base-warning>

    <div class="tabs">
      <div @click="getMyClasses(false)">
        <h1>Classes</h1>
      </div>
      <div @click="getMyClasses(true)">
        <h1>My Classes</h1>
      </div>
    </div>

    <div class="main-div-list" v-if="showMyClasses == false">
      <ul v-for="subject in filterClasses" :key="subject.name">
        <li>
          <div class="name-teacher">
            <h2>{{ subject.name }}</h2>
            <p>{{ subject.teacher }}</p>
          </div>

          <div class="side-info">
            <p><span>Time: </span>{{ subject.hour }}</p>
            <p><span>Room:</span> {{ subject.room }}</p>
          </div>
          <p>{{ subject.day }}</p>
          <p><span>Grades: </span>{{ subject.for }}</p>
          <base-button class="button" @click="addClass(subject.name)">
            Enroll
          </base-button>
        </li>
      </ul>
    </div>
    <div v-else class="main-div-list" id="myClassesSection">
      <div v-if="!noClasses">
        <ul v-for="subject in myClasses" :key="subject.name">
          <li>
            <div class="name-teacher">
              <h2>{{ subject.name }}</h2>
              <p>{{ subject.teacher }}</p>
            </div>

            <div class="side-info">
              <p><span>Time: </span>{{ subject.hour }}</p>
              <p><span>Room:</span> {{ subject.room }}</p>
            </div>
            <p>{{ subject.day }}</p>
            <p><span>Grades: </span> {{ subject.for }}</p>
            <base-button class="button" @click="removeClass(subject.name)">
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
import BaseWarning from "../ui/BaseWarning.vue";

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
    BaseWarning,
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

        if (strg.includes(userGrade.toLowerCase())) {
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
.main-div-list {
  border-radius: 1rem;
  box-shadow: 0px 0px 5px rgb(56, 187, 56);
  width: 40rem;
  margin-left: 21rem;
  margin-bottom: 5rem;
  padding: 3px 5px;
}

.side-info {
  display: flex;
  flex-direction: row;
}

.side-info p {
  margin-top: 0rem;
  font-size: 1.1rem;
}

.side-info p:nth-child(2) {
  margin-left: 0.5rem;
}

span {
  color: rgb(56, 187, 56);
}

.name-teacher {
  display: flex;
  flex-direction: row;
}

.name-teacher p {
  margin-left: 0.5rem;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  border-left: solid 0.1rem rgb(56, 187, 56);
  padding-left: 1rem;
}

ul {
  list-style: none;
}

h2 {
  color: rgb(56, 187, 56);
}

li {
  border-bottom: solid 1px rgb(56, 187, 56);
  width: 35rem;
}

li p {
  margin-top: 0rem;
}

.button {
  margin-left: 27rem;
  margin-top: -4rem;
  width: 5rem;
  height: 3rem;
  color: white;
  font-size: 1.2rem;
}

.tabs {
  display: flex;
  flex-direction: row;
  margin-left: 28rem;
  margin-top: 2rem;
}

.tabs div {
  background-color: rgb(56, 187, 56);
  color: white;
  margin-left: 2rem;
  width: 10rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.tabs div:hover {
  cursor: pointer;
}

.tabs div h1 {
  padding-left: 1rem;
}

.no-classes {
  margin-left: 5rem;
  font-size: 2rem;
}

.warning p {
  font-size: 1.5rem;
}
</style>
