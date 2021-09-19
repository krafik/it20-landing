const slides = document.querySelectorAll('.slider__slide'), //все слайды
  prev = document.querySelector('.slider__prev'),
  next = document.querySelector('.slider__next');
//   slidesWrapper = document.querySelector('.slider__slide-wrapper'),
//   slidesField = document.querySelector('.slider__slider-inner'),
//   width = window.getComputedStyle(slidesWrapper).width; //нужно Знать, ширину окна через которое мы будем видеть слайды

let slideIndex = 1;
showSlides(slideIndex);
// slidesField.style.width = 100 * slides.length + '%'; //устанвим блоку ширину. кол-во слайдов на 100%. 

// slides.forEach(slide => {
//   slide.style.width = width;
// }); //все слайды одинаковой ширины

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item) => item.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';
}

function plusSlides (n) {
  showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
  plusSlides(-1);
})
next.addEventListener('click', () => {
  plusSlides(1);
})