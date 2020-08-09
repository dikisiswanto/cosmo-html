/*! tema cosmo | MIT License | 2020 - Diki Siswanto | https://github.com/dikisiswanto/cosmo */
//=require ./statistics.js

$(document).ready(function () {

	//=require ./slider.js
	//=require ./newsticker.js
	//=require ./custom-sidebar.js
	//=require ./fancybox.js

	$(window).scroll(function () {
		if (($(this).scrollTop() - $('.header').height()) > 0) {
			$('.header').addClass('header--sticky');
		} else {
			$('.header').removeClass('header--sticky')
		}
	})

	$('.button--menu').click(function () {
		$('.nav').toggleClass('nav--opened');
	})
})