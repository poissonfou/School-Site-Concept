<template>
  <main>
    <div class="text-box">
      <div>
        <ul class="sections">
          <li @click="changeSection('Technology')" id="tech">Technology</li>
          <li @click="changeSection('Bilinguacy')" id="bi">Bilinguacy</li>
          <li @click="changeSection('Ethics')" id="ethics">Ethics</li>
          <li @click="changeSection('Our Philosophy')" id="philo">
            Our Philosophy
          </li>
        </ul>
      </div>
      <div v-if="section == 'Technology'" class="section">
        <div class="top-p">
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

        <p class="bottom-p">
          Therefore, since primary school our students study subjects such as
          robotics, web development and software development with languages such
          as Java, C# and Python, hardware maintenance, focusing on computers,
          programming logic and the ethical problems that might appears as tech
          develops. You can access our course guides for each grade here:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
      <div v-else-if="section == 'Bilinguacy'" class="section">
        <div class="top-p">
          <p>
            Globalization and the internet have brought many good things to
            humanity as a whole. Although English has taken place as the global
            language, understading foreigners in their own mother language
            enriches communication and cultural exchange. Moreover,
            professionals who are bilingual have more chances in job
            applications.
          </p>
          <img src="../../assets/language_text.jpg" alt="" />
        </div>

        <p class="bottom-p">
          In our school, your child will have five different languages to choose
          from, having to pick two of them to study through their school years.
          Those are French, Italian, German, Spanish and Portuguese. If a
          student judges themselves proficient in one of their chosen languages
          and desires to study a different, we offeer placement test to very the
          student ability and accomodate them in the new class. You can access
          our course guides for each grade here:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
      <div v-else-if="section == 'Ethics'" class="section">
        <div class="top-p">
          <p>
            Since we value the Humanistic tradition in our school, we strive to
            foster critical thinking and rationality within our students' minds.
            Philosophy andd Ethics are key to develop healthy and respectual
            individuals, who will be aware of how their actions affect the world
            and make well informed decisions.
          </p>
          <img src="../../assets/philosophy_text.jpg" alt="" />
        </div>

        <p class="bottom-p">
          Your kid will study the entire western philosofical tradition, from
          classics such as Plato to more modern thinkers such as Foucault.
          Nevertheless, we care about going againts the canons of our culture
          and providing students with diverse views, so authors from the Global
          South (places such and Latin America and Africa) are also studied to
          enrich student views. You can access our course guides for each grade
          here:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
      <div v-else class="section">
        <div class="top-p">
          <p>
            In the past decades, the world has changed as new economical,
            political and social paradigms have arised. We understand that
            education should strive to understand, critizice and contribute to
            those changes. Such education need to be open to discuss diversity
            of ideas, cultures, ethicies, sexualities, etc.
          </p>
          <img src="../../assets/teacher.jpg" alt="" />
        </div>

        <p class="bottom-p">
          Through all grades and ages students critical thinking and
          socio-cultural sensibility will be developed. We strive to contribute
          to the formation of individuals who are able to make well informed
          decisions and contribute to the ongoing changes in our society. An
          education that provides students the tools to question stabilished
          ideias and critically judge the biases and interest behing the flow of
          information in our modern age. Media literacy, sociology, anthropology
          and other subjects are a part of this vision:
        </p>
        <ul>
          <li><a href="">Kindergarden</a></li>
          <li><a href="">Middle School</a></li>
          <li><a href="">Highschool</a></li>
        </ul>
      </div>
    </div>
  </main>
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

      let tech = document.querySelector("#tech");
      let bi = document.querySelector("#bi");
      let ethics = document.querySelector("#ethics");
      let philo = document.querySelector("#philo");

      if (section == "Technology") {
        tech.classList = "section-selected";
        bi.classList = "";
        philo.classList = "";
        ethics.classList = "";
      }

      if (section == "Bilinguacy") {
        bi.classList = "section-selected";
        tech.classList = "";
        philo.classList = "";
        ethics.classList = "";
      }

      if (section == "Ethics") {
        ethics.classList = "section-selected";
        bi.classList = "";
        philo.classList = "";
        tech.classList = "";
      }

      if (section == "Our Philosophy") {
        philo.classList = "section-selected";
        tech.classList = "";
        bi.classList = "";
        ethics.classList = "";
      }
    },
  },
  mounted() {
    this.changeSection("Technology");
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150vh;
}

ul {
  list-style: none;
  padding: 0;
}

.sections {
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
}

.sections li {
  margin-left: 1em;
  font-size: 1.5rem;
  color: rgb(0, 7, 92);
  font-weight: bold;
}

.section-selected {
  border-bottom: rgb(0, 7, 92) 1px solid;
}

li:hover {
  cursor: pointer;
}

.text-box {
  box-shadow: -2px 3px 5px rgb(0, 7, 92);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}

.text-box div {
  padding: 1em;
}

.text-box p {
  font-size: 1.5rem;
}

.section {
  width: 47em;
}

.top-p {
  display: flex;
}

.bottom-p {
  margin: 0;
  padding: 0em 1em;
}

img {
  width: 14rem;
  height: 18rem;
  margin-left: 1em;
  object-fit: cover;
}

.section li {
  margin-bottom: 1em;
}

.section ul {
  padding-left: 1em;
  width: 10em;
}

a {
  color: rgb(0, 7, 92);
  font-size: 1.5rem;
}

@media (max-width: 1000px) {
  .sections li {
    font-size: 1.2rem;
  }

  .section {
    width: 40em;
  }
}

@media (max-width: 800px) {
  .sections li {
    font-size: 1rem;
  }

  img {
    width: 100%;
    height: 14rem;
    margin: 0;
  }

  .top-p {
    flex-direction: column-reverse;
    width: 25em;
  }

  .top-p p {
    padding: 1em;
  }

  .bottom-p {
    padding: 0em 2em;
  }

  .section {
    width: 27.5em;
  }

  .section p {
    font-size: 1.1rem;
  }

  .section ul {
    padding-left: 2em;
  }

  .section ul li a {
    font-size: 1.1rem;
  }
}

@media (max-width: 500px) {
  main {
    height: 120vh;
  }

  .section {
    width: auto;
  }

  .text-box {
    box-shadow: none;
  }
}
</style>
