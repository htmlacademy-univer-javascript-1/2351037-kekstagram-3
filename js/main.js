import './data.js';
import { createPublications } from './data.js';
import './draw.js';
import { createPictures } from './draw.js';
import './util.js';
import './form.js';
import './validate.js';
import './scale.js';

const publication = createPublications();

createPictures(publication);
