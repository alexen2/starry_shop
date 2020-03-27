let productPageSlider = $('.product-page__slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
});

$('.product-page__colors a').on('click', function(e) {
	e.preventDefault();
	$('.product-page__colors a').removeClass('product-page__color-active');
	$(this).addClass('product-page__color-active');
	productPageSlider.slick('slickGoTo', $(this).attr('data-product-color'));
});