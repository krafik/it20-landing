window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__mobile-content'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger'),
    body= document.querySelector('body');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('header__mobile-content_active');
    body.classList.toggle('scroll-lock');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('header__mobile-content_active');
        body.classList.toggle('scroll-lock');
    })
})
})