const body = document.querySelector('body'),
modal = document.querySelector('.overlay'),
  closeModal = document.querySelector('.modal__close'),
  form = document.querySelector('.modal__form'),
  inputs = form.querySelectorAll('.modal__form-radio'),
  inputsWrap = form.querySelectorAll('.modal__form-input'),
  popUpLinks = document.querySelectorAll('.m_btn');
console.log(popUpLinks)
// form.addEventListener('change', ()=>{
//   inputs.forEach((item, inputs) => {
//     if(item.checked == true){
//       // item.classList.add('active')
//       console.log(item)
//     }
//   });
// });



inputs.forEach((item, inputs) => {
  if (item.checked == true) {
    // item.classList.add('active')
    console.log(item)
  }
});
$.each($('.modal__form-input'), function (index, val) {
  if ($(this).find('input').prop('checked') == true) {
    $(this).addClass('active');
  }
});

$(document).on('click', '.modal__form-input', function (event) {
  $(this).parents('.modal__form-inputs').find('.modal__form-input').removeClass('active');
  $(this).parents('.modal__form-inputs').find('.modal__form-input input').prop('checked', false);
  $(this).toggleClass('active');
  $(this).find('input').prop('checked', true);
  return false;
})

if (popUpLinks.length > 0) {
  for (let i = 0; i < popUpLinks.length; i++) {
    const popUpLink = popUpLinks[i];
    popUpLink.addEventListener('click', function (e) {
      popUpOpen();
    })
  }
}
closeModal.addEventListener('click', () => {
  popUpClose();
})

function popUpOpen() {
  console.log('done')
  modal.classList.add('open');
  body.classList.add('scroll-lock');
  // modal.style.display = 'flex'
}

function popUpClose() {
  modal.classList.remove('open');
  body.classList.remove('scroll-lock');
}