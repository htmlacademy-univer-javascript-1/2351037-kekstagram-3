import {createPictures} from './draw.js';
import {showAlert} from './util.js';
import {closeOverlay} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

export function getData () {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => createPictures(response))
    .catch(() => showAlert('Не удалось загрузить изображения'));
}


export const sendData = (evt) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body: new FormData(evt.target),
    },
  )
    .then((response) => {
      if (response) {
        showSuccessMessage();
        closeOverlay(true);
      } else {
        showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз');
        closeOverlay(false);
      }
    })
    .catch(() => {
      showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз');
    });
};
