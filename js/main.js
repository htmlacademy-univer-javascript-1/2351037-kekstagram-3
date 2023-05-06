function getRandomIntInRange(min, max) {
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}
