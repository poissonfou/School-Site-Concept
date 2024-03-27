<template>
  <div id="main-div" class="carrousel">
    <ul id="review-list">
      <li>
        <div class="main-div">
          <img src="../../assets/gabriel.jpg" alt="" />
          <div class="info">
            <div>
              <p>
                <span>"</span>My kids had to change schools due to my job and I
                was worried about how they would fit in in the new school. The
                educators were amazing at listening to my private concerns and
                helping my kids interact and feel comfortable in that new
                environment.<span class="bottom">"</span>
              </p>
            </div>
            <div>
              <h4>Gabriel Sanchez <span>Publicist</span></h4>
              <div class="strip"></div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/vanya.jpg" alt="" />
          <div class="info">
            <div>
              <p>
                <span>"</span>I have never seen a school like this one! My
                daughters always come home full of questions from their
                philosophy class and it's amazing to see genuine critical
                thinking fostered at such a young age. I couldn't be more proud
                of my daughters and reassured in my choice for their
                education!<span>"</span>
              </p>
            </div>
            <div>
              <h4>Vanya Winscom <span>Civil Engineer</span></h4>
              <div class="strip"></div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/sandra.jpeg" alt="" />
          <div class="info">
            <div class="text-box">
              <p>
                <span>"</span>I can sleep soundly knowing my boy is getting the
                education he needs to get into his dream school. The last year
                of highschool can be so stressful, but they provide an amazing
                preparation for the SAT and college applications, plus dealing
                with the stress of it all.<span>"</span>
              </p>
            </div>
            <div>
              <h4>Sandra Washington <span>Highschool Teacher</span></h4>
              <div class="strip"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <a id="prev" href="#">&#8810;</a>
    <a id="next" href="#">&#8811;</a>
  </div>
</template>

<script>
export default {
  methods: {
    Slider() {
      let count = 1;
      const slider = document.getElementById("main-div");
      const slideList = document.getElementById("review-list");
      const prev = document.getElementById("prev");
      const next = document.getElementById("next");

      let items = slideList.querySelectorAll("li").length;
      let sliderWidth = slider.offsetWidth;

      window.addEventListener("resize", function () {
        sliderWidth = slider.offsetWidth;
      });

      let prevSlide = function () {
        if (count > 1) {
          count = count - 2;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        } else {
          count = items - 1;
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        }
      };

      let nextSlide = function () {
        if (count < items) {
          slideList.style.left = "-" + count * sliderWidth + "px";
          count++;
        } else if ((count = items)) {
          slideList.style.left = "0px";
          count = 1;
        }
      };

      setInterval(function () {
        nextSlide();
      }, 7000);

      next.addEventListener("click", function (e) {
        e.preventDefault();
        nextSlide();
      });

      prev.addEventListener("click", function (e) {
        e.preventDefault();
        prevSlide();
      });
    },
  },
  mounted() {
    this.Slider();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Passion+One&display=swap");

li {
  width: 10%;
}

.info {
  background-color: rgb(0, 7, 92);
  padding-top: 1rem;
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.carrousel {
  position: relative;
  height: 30rem;
  margin-left: 4em;
  margin-right: 4em;
  margin-top: 2em;
  overflow: hidden;
}

.main-div {
  display: flex;
  width: 100%;
}

#review-list {
  position: relative;
  list-style: none;
  height: 100%;
  width: 1000%;
  padding: 0;
  margin: 0;
  transition: all 750ms ease;
  left: 0;
  overflow: hidden;
}

li {
  float: left;
}

img {
  width: 35%;
  object-fit: cover;
}

p {
  white-space: wrap;
  margin: 0;
  font-size: 1.8rem;
  padding: 2em;
  color: white;
}

h4 {
  font-size: 1.5rem;
  font-style: italic;
  color: rgb(191, 171, 37);
  margin-left: 2em;
}

h4 span {
  color: white;
  font-family: Roboto;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

#prev,
#next {
  width: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  transition: all 150ms ease;
}

#prev:hover,
#next:hover {
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 0;
}

#prev {
  left: 0.625rem;
}

#next {
  right: 0.625rem;
}

span {
  color: rgb(191, 171, 37);
  font-family: "Passion One", cursive;
  font-size: 1.3rem;
}

.strip {
  width: 100%;
  height: 4rem;
  background-color: rgb(107, 5, 4);
}

.bottom {
  height: 0.5em;
}

@media (max-width: 1100px) {
  p {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h4 span {
    font-size: 0.8rem;
  }
}

@media (max-width: 750px) {
  .carrousel {
    margin-left: 0;
    margin-right: 0;
  }

  .main-div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 14em;
  }

  p {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.2rem;
  }

  .info {
    display: initial;
  }
}
</style>
