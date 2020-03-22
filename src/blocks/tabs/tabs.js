$(function() {
	let tabsLink = $('.tabs__menu a');

	tabsLink.on('click', function(e) {
		e.preventDefault();			
		chanchgTab($(this).attr('href'));
	});

	function chanchgTab(tabName) {
		let tab = $('.tabs__body li');
		
		tab.removeClass('tabs__body-active');
		$(tabName).addClass('tabs__body-active');

		tabsLink.removeClass('tabs__menu-active');
		$('.tabs__menu a[href="'+tabName+'"]').addClass('tabs__menu-active');
	}
});