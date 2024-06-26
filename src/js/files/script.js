// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

var hover = document.querySelector('.hover'),
  elemHover = false;

hover.addEventListener('mouseover', function (e) {
  if (elemHover) return;
  var target = e.target.closest('.hover__item-wrap');
  if (!target) return;

  elemHover = target;

  var parent = target.closest('.hover'),
    old = parent.querySelector('.hover__item-wrap--fill')
  if (old) old.classList.remove('hover__item-wrap--fill')
  target.classList.add('hover__item-wrap--fill')
})

hover.addEventListener('mouseout', function (e) {
  if (!elemHover) return
  var target = e.target.closest('.hover__item-wrap')

  target.classList.remove('hover__item-wrap--fill');

  elemHover = null;
})

hover.addEventListener('mouseleave', function (e) {
  var def = e.target.querySelectorAll('.hover__item-wrap')[0];
  if (!def.classList.contains('hover__item-wrap--fill')) def.classList.add('hover__item-wrap--fill');
})

window.onscroll = function() {myFunction()};
var first = document.getElementById("first-scroll");
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    first.classList.add("scroll");
  } else {
    header.classList.remove("sticky");
    first.classList.remove("scroll");
  }
}