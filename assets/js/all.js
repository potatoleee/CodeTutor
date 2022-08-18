"use strict";

$(document).ready(function () {
  $('.btn__buger').on('click', function (e) {
    $('.btn__buger').toggleClass('open');
    $('.nav__content--mobile').toggleClass('open');
  });
});
var swiper = new Swiper(".mySwiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
