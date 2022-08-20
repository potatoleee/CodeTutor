"use strict";

var _Datepicker = _interopRequireDefault(require("path/to/node_modules/vanillajs-datepicker/js/Datepicker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var elem = document.querySelector('input[name="foo"]');
var datepicker = new _Datepicker["default"](elem, {// ...options
});
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
//# sourceMappingURL=all.js.map
