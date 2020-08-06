"use strict";

$(document).ready(function () {
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
  var childElems = $('.slick-thumbnail').children().length;
  var slidesToShow = childElems - 1 < 5 ? childElems - 1 : 5;
  $('.slick-thumbnail').slick({
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    asNavFor: '.slick-featured',
    arrows: false,
    focusOnSelect: true
  });
  $('.newsticker__list').marquee({
    duration: 5000,
    gap: 50,
    pauseOnHover: true,
    speed: 150
  });
  $(window).scroll(function () {
    var headerHeight = $('.header').height() - 75;

    if ($(this).scrollTop() > headerHeight) {
      $('.header').addClass('header--sticky');
    } else {
      $('.header').removeClass('header--sticky');
    }
  });
});