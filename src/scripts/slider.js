$('.slick-featured').slick({
	infinite: true,
	slidesToShow: 1,
	speed: 500,
	fade: true,
	autoplay: true,
	asNavFor: '.slick-thumbnail',
	prevArrow: $('.slider__arrow--left'),
	nextArrow: $('.slider__arrow--right')
});

const childElems = $('.slick-thumbnail').children().length;
let slidesToShow = (childElems - 1) < 5 ? (childElems - 1) : 5;

$('.slick-thumbnail').slick({
	infinite: true,
	slidesToShow: slidesToShow,
	slidesToScroll: 1,
	asNavFor: '.slick-featured',
	arrows: false,
	focusOnSelect: true
})