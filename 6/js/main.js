import './data.js';
import { createPublications } from './data.js';
import './draw.js';
import { createPictures } from './draw.js';
import './util.js';
import { checkMaxLength } from './util.js';

checkMaxLength('hello', 5);

const publication = createPublications();

createPictures(publication);
//Задание 7 часть 2
