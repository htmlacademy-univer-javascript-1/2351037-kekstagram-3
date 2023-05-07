import {generatePublication} from './util.js';

function createPublications() {
  const photosArray = [];

  for (let i = 1; i <= 25; i++) {
    const photo = generatePublication(i);
    photosArray.push(photo);
  }

  return photosArray;
}

export {createPublications};
