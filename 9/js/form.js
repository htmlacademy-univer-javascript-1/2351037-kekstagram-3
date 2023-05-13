import {resize} from './scale.js';
import {isEscapeKey} from './util.js';

const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = imageForm.querySelector('.img-upload__overlay');
const closeButton = imageForm.querySelector('#upload-cancel');
const radioButtons = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview img');

const closeOnButton = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeOverlay();
  }
};

const removeFilter = (evt) => {
  evt.preventDefault();
  imagePreview.classList = [];
};

const changeFilter = (evt) => {
  const element = evt.target.value;
  removeFilter(evt);
  imagePreview.classList.add(`effects__preview--${element}`);
};

const addListener = (elem) => {
  if (elem.value === 'none') {
    elem.addEventListener('click', removeFilter);
  } else {
    elem.addEventListener('click', changeFilter);
  }
};

const makeListener = () => {
  radioButtons.forEach((element) => addListener(element));
};

const removeListener = () => {
  radioButtons.forEach((element) => {
    if (element.value === 'none') {
      element.removeEventListener('click', removeFilter);
    } else {
      element.removeEventListener('click', changeFilter);
    }
  });
};

export function closeOverlay () {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);

  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  imageForm.querySelector('.img-upload__preview img').classList = [];
  resize(100);
  removeListener();
}

function openOverlay () {
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
  makeListener();
}

closeButton.addEventListener('click', () => {
  closeOverlay();
});

imageForm.addEventListener('change', (evt) => {
  evt.preventDefault();
  openOverlay();
});
