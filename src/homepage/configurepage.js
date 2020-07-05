import { createNavBar } from './navbar/topnavbar';
import { searchModule } from './navbar/searchModule';
import { DomModule } from '../helpers/CreateDomElements';

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
      const currentTemp = document.getElementById('idTempTitleCard');
      const onlyTemp = currentTemp.textContent.split(' ')[0];
      console.log(parseInt(onlyTemp, 10));
      console.log(DomModule.changeToCelsius(parseInt(onlyTemp, 10)));
      console.log('farent');
    });
    const celsius = document.getElementById('customRadioInline2');
    celsius.addEventListener('click', () => {
      const currentTemp = document.getElementById('idTempTitleCard');
      const onlyTemp = currentTemp.textContent.split(' ')[0];
      console.log(parseInt(onlyTemp, 10));
      console.log(DomModule.changeToCelsius(parseInt(onlyTemp, 10)));
      console.log('celsius');
    });
  };
  return {
    configureHome,
  };
})();

export default configurePage;