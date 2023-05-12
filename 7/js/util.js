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

export {checkMaxLength, generatePublication};
