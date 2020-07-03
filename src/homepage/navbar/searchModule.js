import { cardModule } from '../cards/cardModule';

export const searchModule = (() => {
  const searchWeatherCity = () => {
    const searchInput = document.getElementById('idInputSerach');
    searchInput.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        //event.preventDefault();
        cardModule.parseDataWeather(searchInput.value, 'PE');
      }
    });
  };
  return {
    searchWeatherCity,
  };
})();

export default searchModule;