$(function () {
  $(".top_close_btn").on("click", function () {
    // $(".TopBanner").slideUp(600);
    $(".TopBanner,.Wrap").addClass("check");
  });
  const win_w = $(window).width();
  scroll();
  $(window).on("scroll", function () {
    scroll();
  });
  $(window).resize(function () {
    scroll();
  });
  const li_box = $(".Section01 .slide_dots > li");
  $(".main_slider").on("init afterChange", function (e, s, c) {
    //console.log(s.slideCount);
    const current = $(".main_slider .slick-current");
    //console.log(current);
    current.addClass("on").siblings().removeClass("on");
    $(".Section01 .num").html(
      "<b> 0" + ((c ? c : 0) + 1) + "</b> <span> / 0" + s.slideCount + "</span>"
    );
    $(li_box).eq(c).addClass("on").siblings().removeClass("on");
  });
  $(".main_slider").slick({
    arrows: false,
    usetransform: false,
  });
  $(li_box).click(function () {
    var slideNo = $(this).index();
    $(".main_slider").slick("slickGoTo", slideNo);
  });
  $(".left_slider").slick({
    arrows: false,
    fade: true,
    asNavFor: ".right_slider",
  });
  $(".right_slider").slick({
    arrows: false,
    asNavFor: ".left_slider",
    slidesToShow: 5,
  });
  $(".Section03 .slide_handler i:first-child").on("click", function () {
    $(".left_slider").slick("slickPrev");
  });
  $(".Section03 .slide_handler i:last-child").on("click", function () {
    $(".left_slider").slick("slickNext");
  });
  $(".center_slider").on("init afterChange", function (e, s, c) {
    //console.log(s.slideCount);
    const current = $(".center_slider .slick-current");
    const txt_box = $(".Section04 .content_box > div");
    //console.log(current);
    current.addClass("on").siblings().removeClass("on");
    $(".Section04 .num").html(
      "<b> 0" + ((c ? c : 0) + 1) + "</b> <span> / 0" + s.slideCount + "</span>"
    );
    $(txt_box).eq(c).addClass("on").siblings().removeClass("on");
  });
  $(".center_slider").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "300px",
    dots: true,
  });
  $(".slide_handler2 i:first-child").on("click", function () {
    $(this)
      .parent(".slide_handler")
      .siblings(".slick-slider")
      .slick("slickPrev");
  });
  $(".slide_handler2 i:last-child").on("click", function () {
    $(this)
      .parent(".slide_handler")
      .siblings(".slick-slider")
      .slick("slickNext");
  });
});

function scroll() {
  const win_w = $(window).width();
  const scrollT = $(window).scrollTop();
  //console.log(scrollT);
  if (win_w > 1024) {
    if (scrollT > 0) {
      $(".Header").addClass("on");
    } else {
      $(".Header").removeClass("on");
    }
  } else {
    $(".Header").removeClass("on");
  }
}
