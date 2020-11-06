'use strict';
(function () {

  var headerNav = document.querySelector('.header__nav');
  var toggleNav = document.querySelector('.header__toggle');
  var header = document.querySelector('.header');
  var logo = document.querySelector('.header__logo');

  if (header) {
    header.classList.remove('header--nojs');
  }

  if (toggleNav) {
    toggleNav.addEventListener('click', function () {
      if (headerNav.classList.contains('header__nav--close')) {
        headerNav.classList.remove('header__nav--close');
        headerNav.classList.add('header__nav--open');
      } else {
        headerNav.classList.add('header__nav--close');
        headerNav.classList.remove('header__nav--open');
      }
      header.classList.toggle('header--static');
      logo.classList.toggle('logo--close');
    });
  }

})();
