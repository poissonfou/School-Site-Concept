<template>
  <div class="main-div">
    <div>
      <ul class="sections">
        <li @click="changeSection('Technology')" id="li_one">Technology</li>
        <li @click="changeSection('Bilinguacy')" id="li_two">Bilinguacy</li>
        <li @click="changeSection('Ethics')" id="li_three">Ethics</li>
        <li @click="changeSection('Our Philosophy')" id="li_four">
          Our Philosophy
        </li>
      </ul>
    </div>
    <div class="text-box">
      <div v-if="section == 'Technology'" class="section">
        <div class="intro">
          <p>
            In the past decades, technology has been taking more and more of our
            lives, altering how we socialize, how we work and how we live. We
            understand that, in regard of those observations, students should be
            from their primary forming years prepared to use and understand all
            aspects of technology, hardware and software, as well as its social
            implications.
          </p>
          <img src="../../assets/robotic_text.jpg" alt="" />
        </div>

        <p>
          Therefore, since primary school our students study subjects such as
          robotics, web development and software development with languages such
          as Java, C# and Python, hardware maintenance, focusing on computers,
          programming logic and the ethical problems that might appears as tech
          develops. You can acess our course guides for each grade here:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
      <div v-else-if="section == 'Bilinguacy'" class="section">
        <div class="intro">
          <p>
            Globalization and the internet have brought many good things to
            humanity as a whole. Although English has taken place as teh global
            language, understading foreigners in their own mother language
            enriches communication and cultural exchange. Moreover,
            professionals who are bilingual have more chances in job
            applications.
          </p>
          <img src="../../assets/language_text.jpg" alt="" />
        </div>

        <p>
          In our school, your child will have five different languages to choose
          from, being to pick two of them to study through their school years.
          Those are French, Italian, German, Spanish and Portuguese. If a
          student judges themselves proficient in one of their chosen languages
          and desires to study a different, we offeer placement test to very the
          student ability and accomodate them in the new class. You can acess
          our course guides for each grade here:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
      <div v-else-if="section == 'Ethics'" class="section">
        <div class="intro">
          <p>
            Since we value the Humanistic tradition in our school, we strive to
            foster critical thinking and rationality within our students' minds.
            Philosophy andd Ethics are key to develop healthy and respectual
            individuals, who will be aware of how their actions affect the world
            and make well informed decisions.
          </p>
          <img src="../../assets/philosophy_text.jpg" alt="" />
        </div>

        <p>
          Your kid will study the entire western philosofical tradition, from
          classics such as Plato to more modern thinkers such as Foucault.
          Nevertheless, we care about going againts the canons of our culture
          and providing students with diverse views, so authors from the Global
          South (places such and Latin America and Africa) are also studied to
          enrich student views. You can acess our course guides for each grade
          here:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
      <div v-else class="section">
        <div class="intro">
          <p>
            In the past decades, the world has changed as new economical,
            political and social paradigms have arised. We understand that
            education should strive to understand, critizice and contribute to
            those changes. Such education need to be open to discuss diversity
            of ideas, cultures, ethicies, sexualities, etc.
          </p>
          <img src="../../assets/teacher.jpg" alt="" />
        </div>

        <p>
          Through all grades and ages students critical thinking and
          socio-cultural sensibility will be developed. We strive to contribute
          to the formation of individuals who are able to make well informed
          decisions and contribute to the ongoing changes in our society. An
          education that provides students the tools to question stabilished
          ideias and critically judge the biases and interest behing the flow of
          information on our modern age. Media literacy, sociology, anthropology
          and other subjects are a part of this vision:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
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

      let li_one = document.querySelector("#li_one");
      let li_two = document.querySelector("#li_two");
      let li_three = document.querySelector("#li_three");
      let li_four = document.querySelector("#li_four");

      if (section == "Technology") {
        li_one.style.boxShadow = "-13px 0px 10px -2px black";
        li_one.style.color = "rgb(0, 7, 92)";
        li_one.style.borderStyle = "none";

        li_two.style.boxShadow = "none";
        li_two.style.color = "rgb(245, 239, 239)";
        li_two.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_two.style.borderRightStyle = "none";

        li_three.style.boxShadow = "none";
        li_three.style.color = "rgb(245, 239, 239)";
        li_three.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_three.style.borderRightStyle = "none";

        li_four.style.boxShadow = "none";
        li_four.style.color = "rgb(245, 239, 239)";
        li_four.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_four.style.borderRightStyle = "none";
      }

      if (section == "Bilinguacy") {
        li_two.style.boxShadow = "-13px 0px 10px -2px black";
        li_two.style.color = "rgb(0, 7, 92)";
        li_two.style.borderStyle = "none";

        li_one.style.boxShadow = "none";
        li_one.style.color = "rgb(245, 239, 239)";
        li_one.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_one.style.borderRightStyle = "none";

        li_three.style.boxShadow = "none";
        li_three.style.color = "rgb(245, 239, 239)";
        li_three.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_three.style.borderRightStyle = "none";

        li_four.style.boxShadow = "none";
        li_four.style.color = "rgb(245, 239, 239)";
        li_four.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_four.style.borderRightStyle = "none";
      }

      if (section == "Ethics") {
        li_three.style.boxShadow = "-13px 0px 10px -2px black";
        li_three.style.color = "rgb(0, 7, 92)";
        li_three.style.borderStyle = "none";

        li_one.style.boxShadow = "none";
        li_one.style.color = "rgb(245, 239, 239)";
        li_one.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_one.style.borderRightStyle = "none";

        li_two.style.boxShadow = "none";
        li_two.style.color = "rgb(245, 239, 239)";
        li_two.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_two.style.borderRightStyle = "none";

        li_four.style.boxShadow = "none";
        li_four.style.color = "rgb(245, 239, 239)";
        li_four.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_four.style.borderRightStyle = "none";
      }

      if (section == "Our Philosophy") {
        li_four.style.boxShadow = "-13px 0px 10px -2px black";
        li_four.style.color = "rgb(0, 7, 92)";
        li_four.style.borderStyle = "none";

        li_one.style.boxShadow = "none";
        li_one.style.color = "rgb(245, 239, 239)";
        li_one.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_one.style.borderRightStyle = "none";

        li_two.style.boxShadow = "none";
        li_two.style.color = "rgb(245, 239, 239)";
        li_two.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_two.style.borderRightStyle = "none";

        li_three.style.boxShadow = "none";
        li_three.style.color = "rgb(245, 239, 239)";
        li_three.style.border = "0.1rem solid rgb(0, 7, 92)";
        li_three.style.borderRightStyle = "none";
      }
    },
  },
  mounted() {
    this.changeSection("Technology");
  },
};
</script>

<style scoped>
.sections {
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  margin-left: -2.5rem;
}

.sections li {
  box-shadow: 0px 0px 10px rgb(0, 7, 92);
  height: 2rem;
  width: 10rem;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  border-style: solid;
}

li:hover {
  cursor: pointer;
}

.main-div {
  display: flex;
  flex-direction: column;
  margin-left: 0rem;
}

.text-box {
  width: 34rem;
  height: 39rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
}

.text-box div {
  padding-left: 1rem;
  padding-right: 2rem;
}

.text-box p {
  font-size: 1.2rem;
}

.intro {
  display: flex;
  flex-direction: row;
}

.intro p {
  padding-top: 1rem;
}

.section {
  width: 34rem;
  margin-left: -0.5rem;
  margin-right: 0;
  padding-right: 0;
}

.section p:nth-child(2) {
  width: 30rem;
  padding-left: 1rem;
}

img {
  width: 14rem;
  height: 18rem;
  object-fit: cover;
  margin-top: 2rem;
  margin-left: 0.2rem;
}

a {
  margin-bottom: 2rem;
  color: rgb(0, 7, 92);
  font-size: 1.2rem;
}

@media (min-width: 576px) {
  .sections {
    margin-left: -0.2rem;
  }

  .section {
    width: 40rem;
    margin-left: 4.5rem;
  }

  .text-box p {
    width: 20rem;
  }
}

@media (min-width: 768px) {
  .sections {
    margin-left: 6rem;
  }

  .section {
    margin-left: 8.4rem;
    box-shadow: 0px 0px 5px rgb(0, 7, 92);
    padding-bottom: 1rem;
  }
}

@media (min-width: 992px) {
  .sections {
    display: block;
  }

  .section {
    margin-left: 0rem;
    box-shadow: 5px 5px 10px -7px rgb(0, 7, 92);
  }

  .main-div {
    flex-direction: row;
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
}

@media (min-width: 1200px) {
  .main-div {
    margin-left: 2rem;
  }
}
</style>
