'use strict';

var headerNav = document.querySelector('.header__nav');
var toggleNav = document.querySelector('.header__toggle');
var header = document.querySelector('.header');
var logo = document.querySelector('.header__logo');
header.classList.remove('header--nojs');
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
var inputTel = document.querySelector('input[type="tel"]');
var createMask = window.IMask;

if (inputTel) {
  createMask(inputTel, {
    mask: '+{7} (000) 000-00-00'
  });
}