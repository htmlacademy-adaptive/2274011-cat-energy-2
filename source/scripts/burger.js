const nav = document.querySelector('.nav');
const navToggle = nav.querySelector('.nav__toggle');

nav.classList.remove('nav--nojs');
nav.classList.add('nav--js');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--opened');
});
