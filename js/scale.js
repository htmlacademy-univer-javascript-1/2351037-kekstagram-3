const imagePreview = document.querySelector('.img-upload__preview img');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');

const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

smallerButton.addEventListener('click', () => {
  const currentScale = parseInt(scale.value, 10);
  if (currentScale > MIN_SCALE) {
    scale.value = `${currentScale - STEP_SCALE}%`;
    imagePreview.style.transform = `scale(${(currentScale - STEP_SCALE) / 100})`;
  }
});

biggerButton.addEventListener('click', () => {
  const currentScale = parseInt(scale.value, 10);
  if (currentScale < MAX_SCALE) {
    scale.value = `${currentScale + STEP_SCALE}%`;
    imagePreview.style.transform = `scale(${(currentScale + STEP_SCALE) / 100})`;
  }
});
