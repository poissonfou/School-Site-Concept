<template>
  <div id="main-div">
    <ul id="review-list">
      <li>
        <div>
          <img src="../../assets/gabriel.jpg" alt="" />
          <div class="info">
            <span class="top">"</span>
            <p>
              My kids had to change schools due to my job and I was worried
              about how they would fit in in the new school. The educators were
              amazing at listening to my private concerns and helping my kids
              interact and feel confortable in that new environment.
            </p>
            <span class="bottom">"</span>
            <h4>Gabriel Sanchez <span>Publicist</span></h4>
            <div class="strip"></div>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/vanya.jpg" alt="" />
          <div class="info">
            <span class="top">"</span>
            <p>
              I have never seen a school like this one! My daughters always come
              home full of questions from their philosophy class and it's
              amazing to see genuine critical thinking fostered at such a young
              age. I couldn't be more proud of my daughters and reassured in my
              choice for their education!
            </p>
            <span class="bottom two">"</span>
            <h4>Vanya Winscom <span>Civil Engineer</span></h4>
            <div class="strip"></div>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/sandra.jpeg" alt="" />
          <div class="info">
            <span class="top">"</span>
            <p>
              I can sleep soundly knowing my boy is getting the education he
              needs to get into his dream school. The last year of highschool
              can be so stressful, but they provide an amazing preparation for
              the SAT and college applications, plus dealing with the stress of
              it all. I wish I had something like this in my days.
            </p>
            <span class="bottom three">"</span>
            <h4>Sandra Washington <span>Highschool Teacher</span></h4>
            <div class="strip"></div>
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

.info {
  background-color: rgb(0, 7, 92);
  height: 40rem;
  padding-top: 1rem;
}

#main-div {
  position: relative;
  width: 33rem;
  height: 29rem;
  margin-left: 1.5rem;
  overflow: hidden;
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
  height: 100%;
  float: left;
}

img {
  width: 33rem;
  height: 14rem;
  object-fit: cover;
}

p {
  white-space: wrap;
  width: 25rem;
  height: 15rem;
  margin: 0;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-left: 4rem;
  color: white;
}

h4 {
  margin-top: -4rem;
  font-size: 1.2rem;
  font-style: italic;
  color: rgb(191, 171, 37);
  margin-left: 5rem;
  width: 30rem;
  position: absolute;
  z-index: 2;
}

h4 span {
  color: white;
  font-family: Roboto;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
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
  font-size: 1.8rem;
  position: absolute;
}

.bottom {
  margin-top: -8rem;
  margin-left: 23.7rem;
}

.top {
  margin-top: 0;
  margin-left: 3rem;
  transform: scale(-1, 1);
}

.two {
  margin-top: -6.5rem;
  margin-left: 10rem;
}

.three {
  margin-top: -6.5rem;
  margin-left: 28.5rem;
}

.strip {
  width: 100%;
  height: 4rem;
  margin-top: -2rem;
  background-color: rgb(107, 5, 4);
}

@media (min-width: 576px) {
  #main-div {
    width: 45rem;
    height: 32rem;
  }

  img {
    width: 45rem;
    height: 15rem;
    object-fit: cover;
  }

  .info {
    height: 42rem;
  }

  p {
    width: 40rem;
    font-size: 1.5rem;
  }

  .top {
    margin-top: 0.5rem;
  }

  .bottom {
    margin-top: -8rem;
    margin-left: 15.7rem;
  }

  .two {
    margin-top: -6.2rem;
    margin-left: 11.5rem;
  }

  .three {
    margin-top: -6.2rem;
    margin-left: 14.5rem;
  }

  h4 {
    margin-left: 3.8rem;
  }
}

@media (min-width: 768px) {
  #main-div {
    width: 55rem;
    height: 23rem;
    margin-left: 3.3rem;
  }

  li div {
    display: flex;
    flex-direction: row;
  }

  .info {
    display: flex;
    flex-direction: column;
    height: 23rem;
    width: 33rem;
    background-color: rgb(0, 7, 92);
  }

  img {
    width: 22rem;
    height: 23rem;
  }

  p {
    font-size: 1.4rem;
    margin-left: 1rem;
    width: 25rem;
  }

  h4 {
    margin-top: 16.5rem;
    font-size: 2rem;
  }

  h4 span {
    font-size: 1.2rem;
    margin-top: 0.7rem;
  }

  .strip {
    margin-top: 3rem;
  }

  .top {
    margin-top: 0.5rem;
    margin-left: 4rem;
  }

  .bottom {
    margin-top: 11rem;
    margin-left: 16.5rem;
  }

  .two {
    margin-top: 12.5rem;
    margin-left: 12rem;
  }

  .three {
    margin-top: 12.5rem;
    margin-left: 27rem;
  }
}

@media (min-width: 992px) {
  #main-div {
    width: 65rem;
    height: 35rem;
    margin-left: 4.7rem;
  }

  img {
    width: 27.2rem;
    height: 33rem;
  }

  .info {
    height: 32rem;
    width: 37.8rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-left: 2.5rem;
  }

  p {
    font-size: 1.8rem;
    width: 26rem;
  }

  h4 {
    margin-top: 25rem;
    font-size: 2rem;
  }

  h4 span {
    font-size: 1.2rem;
    margin-top: 0.7rem;
  }

  .strip {
    margin-top: 12rem;
  }

  .top {
    margin-top: 0.7rem;
  }

  .bottom {
    margin-top: 18rem;
    margin-left: 15.5rem;
  }

  .two {
    margin-top: 20rem;
    margin-left: 13.7rem;
  }

  .three {
    margin-top: 22rem;
    margin-left: 12.5rem;
  }

  #prev,
  #next {
    top: 55%;
    font-size: 4rem;
  }

  #next {
    right: 1.5rem;
  }

  #prev:hover,
  #next:hover {
    width: 5rem;
    height: 4rem;
  }
}

@media (min-width: 1200px) {
  #main-div {
    width: 75rem;
    height: 30rem;
    margin-left: 4.7rem;
    padding-top: 5rem;
  }

  .info {
    padding-top: 0rem;
    height: 30rem;
    width: 43rem;
  }

  img {
    width: 32rem;
    height: 35rem;
  }

  p {
    font-size: 1.8rem;
    width: 34rem;
    margin-top: 4rem;
  }

  span {
    font-size: 3rem;
  }

  .top {
    margin-top: 4rem;
    margin-left: 3.5rem;
  }

  .bottom {
    margin-top: 17.2rem;
    margin-left: 15.5rem;
  }

  .two {
    margin-top: 19.5rem;
    margin-left: 13.7rem;
  }

  .three {
    margin-top: 19.5rem;
    margin-left: 29.5rem;
  }

  .strip {
    margin-top: 8rem;
  }
}
</style>
