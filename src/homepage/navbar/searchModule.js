import { cardModule } from '../cards/cardModule';

export const searchModule = (() => {
  const searchWeatherCity = () => {
    const searchInput = document.getElementById('idInputSerach');
    const searchBotton = document.getElementById('idButtonSearch');

    searchInput.addEventListener('keyup', (event) => {
      cardModule.hideAlert();
      if (event.keyCode === 13) {
        if (cardModule.isFahrenheit() === true) {
          cardModule.parseDataWeather(searchInput.value, 'Imperial');
        } else {
          cardModule.parseDataWeather(searchInput.value, 'Metric');
        }
        const inputSearch = document.getElementById('idInputSerach');
        inputSearch.value = '';
        inputSearch.focus();
      }
    });

    searchBotton.addEventListener('click', () => {
      cardModule.hideAlert();
      if (cardModule.isFahrenheit() === true) {
        cardModule.parseDataWeather(searchInput.value, 'Imperial');
      } else {
        cardModule.parseDataWeather(searchInput.value, 'Metric');
      }
      const inputSearch = document.getElementById('idInputSerach');
      inputSearch.value = '';
      inputSearch.focus();
    });
  };
  return {
    searchWeatherCity,
  };
})();

export default searchModule;