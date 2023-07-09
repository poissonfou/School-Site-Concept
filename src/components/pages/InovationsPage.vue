<template>
  <div class="main-div">
    <div>
      <ul>
        <li @click="changeSection('Technology')">Technology</li>
        <li @click="changeSection('Bilinguacy')">Bilinguacy</li>
        <li @click="changeSection('Ethics')">Ethics</li>
        <li @click="changeSection('Our Philosophy')">Our Philosophy</li>
      </ul>
    </div>
    <div class="text-box">
      <div v-if="section == 'Technology'">
        <p>bla bla bla</p>
      </div>
      <div v-else-if="section == 'Bilinguacy'">
        <p>bla bla bla bi</p>
      </div>
      <div v-else-if="section == 'Ethics'">
        <p>bla bla bla ethics</p>
      </div>
      <div v-else>
        <p>bla bla bla ff</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      section: "Technology",
    };
  },
  methods: {
    changeSection(section) {
      this.section = section;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}

li {
  border-style: solid;
  border-color: rgb(56, 187, 56);
  border-width: 0.15rem;
  height: 1.5rem;
  width: 10rem;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  margin-bottom: 0.5rem;
}

li:hover {
  cursor: pointer;
}

.main-div {
  display: flex;
  flex-direction: row;
}

.text-box {
  width: 30rem;
  height: 40rem;
}
</style>
