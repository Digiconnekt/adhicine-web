$(document).ready(function () {
  $(".product-images-slider").slick({
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
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
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
      },
    },
  ],
});
