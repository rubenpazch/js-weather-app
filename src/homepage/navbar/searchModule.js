import { cardModule } from '../cards/cardModule';

export const searchModule = (() => {
  const searchWeatherCity = () => {
    const searchInput = document.getElementById('idInputSerach');
    const searchBotton = document.getElementById('idButtonSearch');

    searchInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        cardModule.parseDataWeather(searchInput.value, 'Imperial');
        const inputSearch = document.getElementById('idInputSerach');
        inputSearch.value = '';
        inputSearch.focus();
      }
    });

    searchBotton.addEventListener('click', () => {
      cardModule.parseDataWeather(searchInput.value, 'Imperial');
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