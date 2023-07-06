<template>
  <div id="main-div">
    <ul id="review-list">
      <li>
        <div>
          <img src="../../assets/gabriel.jpg" alt="" />
          <div class="info">
            <h2>Gabriel Sanchez</h2>
            <p>
              My kids had to change schools due to my job and I was worried
              about how tehy would fit in in the new school. The educators were
              aamzing at listening to my private concerns and helping my kids
              interact and feel confortable in that new environment.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/vanya.jpg" alt="" />
          <div class="info">
            <h2>Vanya Winscom</h2>
            <p>
              I have never seen a scholl like this one! My daughters always come
              home full os questions from their philosophy class and it's
              amazing to see genuine critical thinking fostered at such a young
              age. I couldn't be more proud of my daughters and reassured in my
              choice for their education!
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/sandra.jpeg" alt="" />
          <div class="info">
            <h2>Sandra Washington</h2>
            <p>
              I can sleep soundly knowing my boy is getting the education he
              needs to get into his dream school. The last year of highschool
              can be so stressful, but this provides an amazing preparation for
              the SAT and college applications, plus dealing with the stress of
              it all. I wish I had something like that in my days.
            </p>
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
  data() {
    return {};
  },
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
#main-div {
  position: relative;
  width: 19.599rem;
  height: 27rem;
  margin-top: 2rem;
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
  width: 19.75rem;
  height: 14rem;
  object-fit: cover;
}

p {
  white-space: wrap;
  width: 17.5rem;
  height: 15rem;
  padding-left: 0.5rem;
}

h2 {
  margin-top: 0.8rem;
  color: grey;
  padding-left: 0.5rem;
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

@media (min-width: 768px) {
  li {
    margin-top: 2.5rem;
  }

  li div {
    display: flex;
    flex-direction: row;
  }

  .info {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: rgb(56, 187, 56);
    border-width: 0.3rem;
    height: 19.5rem;
    width: 24.5rem;
  }

  img {
    width: 25rem;
    height: 20rem;
  }

  #main-div {
    width: 50rem;
    margin-left: 0.6rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    margin-left: 4rem;
  }

  p {
    margin-top: 0rem;
    font-size: 1.3rem;
    margin-left: 2.5rem;
    margin-right: 2rem;
    width: 20rem;
  }
}
</style>
