"use strict";

$(document).ready(function () {
  $('.btn__buger').on('click', function (e) {
    $('.btn__buger').toggleClass('open');
    $('.nav__content--mobile').toggleClass('open');
  });
});
var swiper = new Swiper(".mySwiper", {
  // 有fade效果才不會整張切換
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
var elem = document.querySelector('input[name="foo"]');
var datepicker = new Datepicker(elem, {// ...options
});
//# sourceMappingURL=all.js.map
