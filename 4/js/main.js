import './data.js';
import { createPublications } from './data.js';
import './util.js';
import { checkMaxLength } from './util.js';

createPublications();

checkMaxLength('hello', 5);
