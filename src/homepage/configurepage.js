import { createNavBar } from './navbar/topnavbar';
import { cardContainer } from './cards/cardContainer';

export const configurePage = (() => {
  const configureHome = () => {
    const homeContainer = document.querySelector('#main-container');
    homeContainer.appendChild(createNavBar.drawNavBar());
    homeContainer.appendChild(cardContainer.drawCardContainer());
    return homeContainer;
  };

  return {
    configureHome,
  };
})();

export default configurePage;