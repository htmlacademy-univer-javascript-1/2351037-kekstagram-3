function getRandomIntInRange(min, max) {
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

function generateDescription() {
  const descriptions = ['Красивый закат', 'Фото гор', 'Морской пейзаж', 'Цветочный сад', 'Панорама города'];
  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

function generatePublication(i) {
  const publication = {
    id: i,
    url: `photos/${i}.jpg`,
    description: generateDescription(),
    likes: getRandomIntInRange(15, 200),
    comments: getRandomIntInRange(0, 200)
  };
  return publication;
}

const showAlert = (message) => {
  const ALERT_SHOW_TIME = 5000;
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {checkMaxLength, generatePublication, showAlert, isEscapeKey};
