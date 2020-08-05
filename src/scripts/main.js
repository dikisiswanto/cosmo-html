$(document).ready(function () {

	//=require ./slider.js

	$(window).scroll(function () {
		const headerHeight = $('.header').height() - 75;
		if ($(this).scrollTop() > headerHeight) {
			$('.header').addClass('header--sticky');
		} else {
			$('.header').removeClass('header--sticky')
		}
	})
})