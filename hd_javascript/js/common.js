window.addEventListener("DOMContentLoaded", () => {
  // document
  //   .querySelector(".top_close_btn")
  //   .addEventListener("click", function (e) {
  //     //console.log(this); 화살표 함수시 window를 가르킴
  //     //console.log(this, e.target, e.currentTarget);
  //     //window,i,자기자신
  //   });
  // const topHandler = function (ele) {
  //   //재활용가능
  //   ele.classList.toggle("on");
  // };
  const top = document.querySelector(".TopBanner");
  document
    .querySelector(".top_close_btn")
    .addEventListener("click", function () {
      top.classList.toggle("check");
    });
  const slideAll = document.querySelectorAll(".main_slider .swiper-slide");
  const slideNum = document.querySelector(".main_slider_num");
  const slideDots = document.querySelectorAll(".slide_dots li");

  const main_slider = new Swiper(".main_slider", {
    speed: 400,
    loop: true,
    on: {
      init: function () {
        const realSlid = document.querySelector(
          ".main_slider .swiper-slide-active"
        );
        const CloneSlide = document.querySelectorAll(
          ".swiper-slide-duplicate"
        ).length; //복제품 제거
        const idx = this.realIndex;
        //console.log(this.realIndex);
        realSlid.classList.add("on");
        slideNum.innerHTML =
          "<span>" +
          (idx + 1) +
          "</span> / " +
          (this.slides.length - CloneSlide);
        //console.log(CloneSlide);
      },
    },
  });
  const realSlid = document.querySelector(".main_slider .swiper-slide-active");
  main_slider.on("slideChangeTransitionEnd", function () {
    const CloneSlide = document.querySelectorAll(
      ".swiper-slide-duplicate"
    ).length; //복제품 제거
    //console.log(CloneSlide);
    slideAll.forEach((element, i) => {
      element.classList.remove("on");
    });
    realSlid.classList.add("on");
    const idx = this.realIndex;
    //alert(this.realIndex); //현재 인덱스
    slideNum.innerHTML =
      "<span>" + (idx + 1) + "</span> /" + (this.slides.length - CloneSlide);
  });
  slideDots.forEach((it, idx) => {
    it.addEventListener("click", () => {
      //console.log(idx);
      main_slider.slideTo(idx + 1, 600);
      slideDots.forEach((ele) => {
        ele.classList.remove("on");
      });
      it.classList.add("on");
    });
  });
  document
    .querySelector(".slide_handler .prev")
    .addEventListener("click", function () {
      main_slider.slidePrev();
    });
  document
    .querySelector(".slide_handler .next")
    .addEventListener("click", function () {
      main_slider.slideNext();
    });
});
