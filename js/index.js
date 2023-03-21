$(document).ready(function () {
  $(".product-images-slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(".user-reviews-slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
});
