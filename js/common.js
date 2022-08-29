$(function () {
  $(".top_close_btn").on("click", function () {
    // $(".TopBanner").slideUp(600);
    $(".TopBanner,.Wrap").addClass("check");
  });
  const win_w = $(window).width();
  $(window).on("scroll", function () {
    scroll();
  });
  $(window).resize(function () {
    scroll();
  });
  $(".main_slider").slick({
    arrows: false,
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
