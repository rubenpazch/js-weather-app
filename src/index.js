import './scss/style.scss';
import { configurePage } from './homepage/configurepage';

window.onload = function initialActions() {
  configurePage.configureHome();
};
