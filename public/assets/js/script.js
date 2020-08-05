"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$slick;

  $('.slick-featured').slick((_$$slick = {
    infinite: true,
    slidesToShow: 1
  }, _defineProperty(_$$slick, "slidesToShow", 1), _defineProperty(_$$slick, "speed", 500), _defineProperty(_$$slick, "fade", true), _defineProperty(_$$slick, "autoplay", true), _defineProperty(_$$slick, "asNavFor", '.slick-thumbnail'), _defineProperty(_$$slick, "prevArrow", $('.slider__arrow--left')), _defineProperty(_$$slick, "nextArrow", $('.slider__arrow--right')), _$$slick));
  var chilElems = $('.slick-thumbnail').children().length;
  var slidesToShow = chilElems - 1 < 5 ? chilElems - 1 : 5;
  $('.slick-thumbnail').slick({
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    asNavFor: '.slick-featured',
    arrows: false,
    focusOnSelect: true
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