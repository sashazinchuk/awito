'use strict';

const modalAdd = document.querySelector('.modal__add'),
  addAd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit');

//всплывает модальное окно + блокировка кнопки "Отправить"
addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});


//закрытие модального окна через крестик или по синему фону + сброс заполненных данных после закрытия формы
modalAdd.addEventListener('click', event => {
  const target = event.target;

  if (target.closest('.modal__close') || target === modalAdd) {
    modalAdd.classList.add('hide');
    modalSubmit.reset();
  }
});