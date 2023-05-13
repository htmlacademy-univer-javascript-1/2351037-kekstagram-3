const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = document.querySelector('.img-upload__overlay');
const closeButton = document.querySelector('#upload-cancel');
const radioButtons = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview img');

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeOverlay();
  }
};

const changeFilter = (evt, elem) => {
  evt.preventDefault();
  imagePreview.classList = [];
  imagePreview.classList.add(`effects__preview--${elem.value}`);
};

const removeFilter = (evt) => {
  evt.preventDefault();
  imagePreview.classList = [];
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

function closeOverlay () {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
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

imageForm.addEventListener('change', () => {
  openOverlay();
});
