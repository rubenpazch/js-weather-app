import './style.scss';
import { ConfigurePage } from './helpers/configurePage';
import { projectModule } from './project/projectModule';

const keyStorage = 'todoList';

window.onload = function initialActions() {
  ConfigurePage.InitializePage(keyStorage);
};

window.addEventListener('beforeunload', () => {
  if (projectModule.getProjectAmount !== 0) {
    projectModule.saveToStorage(keyStorage);
  }
});