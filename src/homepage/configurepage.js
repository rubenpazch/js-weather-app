import { createNavBar } from './navbar/topnavbar';
import { searchModule } from './navbar/searchModule';

export const configurePage = (() => {
  const configureHome = () => {
    const homeContainer = document.querySelector('#main-container');
    homeContainer.appendChild(createNavBar.drawNavBar());

    searchModule.searchWeatherCity();

    return homeContainer;
  };

  return {
    configureHome,
  };
})();

export default configurePage;