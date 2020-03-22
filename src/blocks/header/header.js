jQuery(document).ready(function() {
	jQuery("#hamburger").click(function () {
		jQuery(".header__menu-mobile").toggleClass('header__menu-mobile--show');
		setTimeout(function(){
		  jQuery('body').toggleClass('overflow-hidden');
		}, 100);
	});

	jQuery("#hamburger_open").click(function () {
		jQuery(".header__menu-mobile").toggleClass('header__menu-mobile--show');
		setTimeout(function(){
		  jQuery('body').toggleClass('overflow-hidden');
		}, 100);
	});

	jQuery(window).resize(function() {		
		if (jQuery(window).width() > 991 ) {			
			jQuery('.header__menu-mobile').removeClass('header__menu-mobile--show');
			jQuery('body').removeClass('overflow-hidden');
		}
	});

	$(window).scroll(function(){
		var $this = $(this),
			 	st = $this.scrollTop();

		if(st > 285){
			$('.wrapper').addClass('scrolled');
		}else{
			$('.wrapper').removeClass('scrolled');
		}
	});	
});