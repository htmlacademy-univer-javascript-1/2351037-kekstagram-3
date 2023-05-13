import {checkMaxLength} from './util.js';
import {sendData} from './server.js';

const MIN_LEN_COMMENT = 20;
const MAX_LEN_COMMENT = 140;
const imageForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(imageForm, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});

pristine.addValidator(document.querySelector('.text__description'), validateComment);

function validateComment(element) {
  return !checkMaxLength(element, MIN_LEN_COMMENT - 1) && checkMaxLength(element, MAX_LEN_COMMENT);
}

imageForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    sendData(evt);
  }
});
