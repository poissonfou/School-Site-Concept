<template>
  <div id="main-div">
    <ul id="review-list">
      <li>
        <div>
          <img src="../../assets/highschool.jpg" alt="" />
          <div>
            <h2>Uma pessoa</h2>
            <p>A pessoa diz tal coisa</p>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/k-12.jpg" alt="" />
          <div>
            <h2>Uma pessoa</h2>
            <p>A pessoa diz tal coisa</p>
          </div>
        </div>
      </li>
      <li>
        <div class="main-div">
          <img src="../../assets/kindergarden.jpg" alt="" />
          <div>
            <h2>Uma pessoa</h2>
            <p>A pessoa diz tal coisa</p>
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

      let items = slideList.querySelectorAll("li").length;
      let sliderWidth = slider.offsetWidth;

      window.addEventListener("resize", function () {
        sliderWidth = slider.offsetWidth;
      });

      // let prevSlide = function () {
      //   if (this.count > 1) {
      //     this.count = this.count - 2;
      //     slideList.style.left = "-" + this.count * sliderWidth + "px";
      //     this.count++;
      //   } else {
      //     this.count = items - 1;
      //     slideList.style.left = "-" + this.count * sliderWidth + "px";
      //     this.count++;
      //   }

      let nextSlide = function () {
        if (count < items) {
          slideList.style.left = "-" + count * 0.9999 * sliderWidth + "px";
          count++;
        }
        if ((count = items)) {
          slideList.style.left = "0px";
          count = 1;
        }
      };

      setInterval(function () {
        nextSlide();
      }, 2000);
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
  width: 17.5rem;
  height: 20rem;
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
}

li {
  position: relative;
  height: 100%;

  float: left;
}

img {
  width: 17.5rem;
}
</style>
