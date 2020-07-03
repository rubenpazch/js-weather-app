import { createNavBar } from './navbar/topnavbar';
import { cardModule } from './cards/cardModule';

export const configurePage = (() => {
  const configureHome = () => {
    const homeContainer = document.querySelector('#main-container');
    homeContainer.appendChild(createNavBar.drawNavBar());

    cardModule.parseDataWeather('Cusco', 'PE');
    return homeContainer;
  };

  return {
    configureHome,
  };
})();

export default configurePage;