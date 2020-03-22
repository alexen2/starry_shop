$(function() {
	let questions = $('.accordion__question');
	let answers = $('.accordion__answer');

	questions.on('click', function() {
		let cross = $(this).find('.accordion__icon');
		let currentAnswer = $(this).next();

		//answers.not(currentAnswer).slideUp(500);
		currentAnswer.slideToggle(500);

		//questions.not(this).find('.accordion__icon').removeClass('accordion__icon--open');
		cross.toggleClass('accordion__icon--open');	

		//questions.not(this).removeClass('accordion__question--active');
		$(this).toggleClass('accordion__question--active');
	});
});

