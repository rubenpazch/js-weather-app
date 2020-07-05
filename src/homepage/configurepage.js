import { createNavBar } from './navbar/topnavbar';
import { searchModule } from './navbar/searchModule';
import { DomModule } from '../helpers/CreateDomElements';
import { cardModule } from './cards/cardModule';

export const configurePage = (() => {
  const configureHome = () => {
    const homeContainer = document.querySelector('#main-container');
    homeContainer.appendChild(createNavBar.drawNavBar());

    const arrayClass = ['d-flex',
      'flex-wrap',
      'justify-content-center',
      'wrapper-cards',
      'pt-4'];
    const wrapperCards = DomModule.addHtmlDiv(arrayClass, 'idCardsWrapper');
    homeContainer.appendChild(wrapperCards);

    searchModule.searchWeatherCity();

    const farent = document.getElementById('customRadioInline1');
    farent.addEventListener('click', () => {
      cardModule.changeWeatherMetric();
    });

    const celsius = document.getElementById('customRadioInline2');
    celsius.addEventListener('click', () => {
      cardModule.changeWeatherMetric();
    });
  };
  return {
    configureHome,
  };
})();

export default configurePage;