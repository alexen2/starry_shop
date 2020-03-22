$('.slider-testimonial').slick({
  dots: true,
  infinite: true,
  speed: 300,
  prevArrow: '<div class="slider-testimonial__arrow-left"></div>',
  nextArrow: '<div class="slider-testimonial__arrow-right"></div>',
  slidesToShow: 3,
  lidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2        
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});