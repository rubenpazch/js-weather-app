import { DomModule } from '../../helpers/CreateDomElements';

export const cardModule = (() => {
  let counter = 0;
  const cardsArrays = [];
  const drawLocationText = (locationInfo) => {
    const html = DomModule.addHtmlH2(locationInfo);
    return html;
  };

  const drawCardImage = (imgPath) => {
    const imgClass = ['card-img-top'];
    const html = DomModule.addHtmlImg(imgClass, imgPath);
    return html;
  };

  const icons = (option) => {
    let icon = '';
    switch (option) {
      case 'temperature-high':
        icon = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="temperature-high" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-temperature-high fa-w-12"><path fill="currentColor" d="M320 0c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM192 80c0-44.1-35.9-80-80-80S32 35.9 32 80v241.9C11.7 342.6 0 370.8 0 400c0 61.8 50.2 112 112 112s112-50.2 112-112c0-29.2-11.7-57.4-32-78.1V80zm-80 400c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V80c0-26.5 21.5-48 48-48s48 21.5 48 48v256.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v274.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z" class=""></path></svg>';
        break;
      case 'compress-arrows-alt':
        icon = '<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="compress-arrows-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-compress-arrows-alt fa-w-16" style="--fa-secondary-opacity:1; --fa-primary-opacity:0.1;"><g class="fa-group"><path fill="currentColor" d="M507.25 30.05l-25.4-25.4a16.06 16.06 0 0 0-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112a23.94 23.94 0 0 0 24 24h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3a16.06 16.06 0 0 0-.05-22.65zM200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3a16.06 16.06 0 0 0 0 22.6l25.4 25.4a16.06 16.06 0 0 0 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312a23.94 23.94 0 0 0-24-24z" class="fa-secondary"></path><path fill="currentColor" d="M183 71.05L152 104 52.65 4.65a16.06 16.06 0 0 0-22.6 0l-25.4 25.4a16.06 16.06 0 0 0 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112a23.94 23.94 0 0 0 24-24V88c0-21.35-25.95-32-41-16.95zm324.3 388.3L408 360l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312a23.94 23.94 0 0 0-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3a16.06 16.06 0 0 0 22.6 0l25.4-25.4a16.06 16.06 0 0 0-.05-22.65z" class="fa-primary"></path></g></svg>';
        break;
      case 'dewpoint':
        icon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dewpoint" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-dewpoint fa-w-16"><path fill="currentColor" d="M160.1 22.1C109.1 179.8 0 222.7 0 333.9 0 432.3 85.9 512 192 512s192-79.7 192-178.1c0-111.8-108.9-153.3-160.1-311.8-8.7-28.8-54-30.1-63.8 0zM416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" class=""></path></svg>';
        break;
      case 'eye':
        icon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-eye fa-w-18"><path fill="currentColor" d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" class=""></path></svg>';
        break;
      default:
        icon = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="temperature-high" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svg-inline--fa fa-temperature-high fa-w-12"><path fill="currentColor" d="M320 0c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm0 96c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zM192 80c0-44.1-35.9-80-80-80S32 35.9 32 80v241.9C11.7 342.6 0 370.8 0 400c0 61.8 50.2 112 112 112s112-50.2 112-112c0-29.2-11.7-57.4-32-78.1V80zm-80 400c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V80c0-26.5 21.5-48 48-48s48 21.5 48 48v256.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v274.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z" class=""></path></svg>';
        break;
    }
    return icon;
  };

  const liElementTemp = (highTemp, lowTemp) => {
    const arrayLi = ['list-group-item', 'item-list', 'd-flex', 'justify-content-between', 'align-items-center'];
    const liElement = DomModule.addHtmlLi(arrayLi);
    const arrayDiv = ['d-flex', 'align-items-center', 'icon-temp'];
    const divIconElement = DomModule.addHtmlDiv(arrayDiv);
    const highLowElement = DomModule.addHtmlH6('High / Low');
    const arrayDivTemp = ['infoTemperature'];
    const divTemperature = DomModule.addHtmlDiv(arrayDivTemp, 'idInfoTemperature');
    const temperatureHigh = DomModule.addHtmlSpan(lowTemp);
    const temperatureLow = DomModule.addHtmlSpan(highTemp);
    divIconElement.innerHTML = icons('temperature-high');
    divIconElement.appendChild(highLowElement);
    divTemperature.appendChild(temperatureHigh);
    divTemperature.appendChild(document.createTextNode(' / '));
    divTemperature.appendChild(temperatureLow);
    liElement.appendChild(divIconElement);
    liElement.appendChild(divTemperature);
    return liElement;
  };

  const liElement = (title, data, iconOption) => {
    const arrayLi = ['list-group-item', 'item-list', 'd-flex', 'justify-content-between', 'align-items-center'];
    const liElement = DomModule.addHtmlLi(arrayLi);
    const arrayDiv = ['d-flex', 'align-items-center', 'icon-temp'];
    const divIconElement = DomModule.addHtmlDiv(arrayDiv);
    const titleElement = DomModule.addHtmlH6(title);
    const arrayDivTemp = ['infoTemperature'];
    const divTemperature = DomModule.addHtmlDiv(arrayDivTemp, 'idInfoTemperature');
    const temperatureHigh = DomModule.addHtmlSpan(data);
    divIconElement.innerHTML = icons(iconOption);
    divIconElement.appendChild(titleElement);
    divTemperature.appendChild(temperatureHigh);
    liElement.appendChild(divIconElement);
    liElement.appendChild(divTemperature);
    return liElement;
  };

  const drawCardElements = (minTemp, maxTemp, pressure, humidity, visibility) => {
    const arrayUl = ['list-group', 'list-group-flush'];
    const ulElement = DomModule.addHtmlUl(arrayUl);
    ulElement.appendChild(liElementTemp(`${minTemp} º`, `${maxTemp} º`));
    ulElement.appendChild(liElement('Pressure', `${pressure} mb`, 'compress-arrows-alt'));
    ulElement.appendChild(liElement('Humidity', `${humidity} %`, 'dewpoint'));
    const visibilityParam = visibility === undefined ? '0 km' : `${visibility / 1000} km`;
    ulElement.appendChild(liElement('Visibility', visibilityParam, 'eye'));
    return ulElement;
  };

  const addSpinner = () => {
    const spinnerContainer = DomModule.addHtmlDiv(['spinner-border'], 'idSpinnerProgress');
    spinnerContainer.setAttribute('role', 'status');
    const spanSpinner = DomModule.addHtmlSpan('Loading...');
    spanSpinner.className = 'sr-only';
    spinnerContainer.appendChild(spanSpinner);
    return spinnerContainer;
  };

  // eslint-disable-next-line max-len
  const drawCard = (id, city, country, icon, description, temp, feelsLike, main, minTemp, maxTemp, pressure, humidity, visibility) => {
    const cardWrapper = DomModule.addHtmlDiv(['card-wrapper', 'mx-2'], `idCardWrapper-${id}`);
    cardsArrays.push([`idCardWrapper-${id}`, city]);
    const divForm = DomModule.addHtmlDiv(['photo']);
    const divWeatherMain = DomModule.addHtmlDiv(['weather-main']);
    const spanWeatherStatus = DomModule.addHtmlSpan(main);
    const divWeatherFeels = DomModule.addHtmlDiv(['weathe-feels'], 'idTempFeelsLike');
    const textFeelLike = `Feels like ${feelsLike} º`;
    const spanFeelsLike = DomModule.addHtmlSpan(textFeelLike);

    const symbolDegre = DomModule.addHtmlSpan('º');
    const currentTemp = `${temp} `;
    const h1Temperature = DomModule.addHtmlH1(currentTemp, null, 'idTempTitleCard');
    h1Temperature.appendChild(symbolDegre);

    const divWeatherIcon = DomModule.addHtmlDiv(['weather-icon']);
    const imgIconPath = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const imgGifPath = 'https://media3.giphy.com/media/l2JIhq7AR3J7Qq9Hy/giphy.gif?cid=ecf05e474ebbdba1ec6f2e9f54f8291b7a52073300ca456e&rid=giphy.gif';
    const weatherDescription = DomModule.addHtmlp(description);

    divWeatherMain.appendChild(spanWeatherStatus);
    divWeatherFeels.appendChild(spanFeelsLike);
    divWeatherIcon.appendChild(drawCardImage(imgIconPath));
    divWeatherIcon.appendChild(weatherDescription);

    divForm.appendChild(drawCardImage(imgGifPath));
    divForm.appendChild(drawLocationText(`${city}, ${country}`));
    divForm.appendChild(divWeatherMain);
    divForm.appendChild(divWeatherFeels);
    divForm.appendChild(h1Temperature);
    divForm.appendChild(divWeatherIcon);

    cardWrapper.appendChild(divForm);
    cardWrapper.appendChild(drawCardElements(minTemp, maxTemp, pressure, humidity, visibility));
    return cardWrapper;
  };

  const getWeatherCity = async (city, metric) => {
    const pathAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=63ef30cbb14aca87dcfe79f9c0c8134a`;
    const response = await fetch(pathAPI, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
  };

  const drawCardContainer = () => {
    const wrapperCars = document.getElementById('idCardsWrapper');
    if (wrapperCars.childNodes.length > 0 && wrapperCars.childNodes.length === 3) {
      wrapperCars.childNodes[0].remove();
      cardsArrays.shift();
    }
    return wrapperCars;
  };

  const parseDataWeather = (city, metric) => {
    getWeatherCity(city, metric).then(v => {
      counter += 1;
      const card = drawCard(counter,
        v.name,
        v.sys.country,
        v.weather[0].icon,
        v.weather[0].description,
        Math.round(v.main.temp),
        Math.round(v.main.feels_like),
        v.weather[0].main,
        v.main.temp_min,
        v.main.temp_max,
        v.main.pressure,
        v.main.humidity,
        v.visibility);
      const wrapper = drawCardContainer();
      wrapper.appendChild(card);
      const homeContainer = document.querySelector('#main-container');
      homeContainer.appendChild(wrapper);
    });
  };

  const isFahrenheit = () => {
    const radioButtonFahrenheit = document.getElementById('customRadioInline1');
    return radioButtonFahrenheit.checked;
  };

  const changeWeatherMetric = () => {
    const lenItems = cardsArrays.length;
    const wrapperCars = document.getElementById('idCardsWrapper');
    if (lenItems === 1) {
      if (isFahrenheit() === false) {
        wrapperCars.childNodes[0].remove();
        parseDataWeather(cardsArrays[0][1], 'Metric');
        cardsArrays.shift();
      } else {
        wrapperCars.childNodes[0].remove();
        parseDataWeather(cardsArrays[0][1], 'Imperial');
        cardsArrays.shift();
      }
    } else if (lenItems === 2) {
      if (isFahrenheit() === false) {
        wrapperCars.childNodes[0].remove();
        wrapperCars.childNodes[0].remove();
        setTimeout(() => {
          parseDataWeather(cardsArrays[0][1], 'Metric');
        }, 500);
        setTimeout(() => {
          parseDataWeather(cardsArrays[1][1], 'Metric');
          cardsArrays.shift();
          cardsArrays.shift();
        }, 600);
      } else {
        wrapperCars.childNodes[0].remove();
        wrapperCars.childNodes[0].remove();
        setTimeout(() => {
          parseDataWeather(cardsArrays[0][1], 'Imperial');
        }, 500);
        setTimeout(() => {
          parseDataWeather(cardsArrays[1][1], 'Imperial');
          cardsArrays.shift();
          cardsArrays.shift();
        }, 600);
      }
    } else if (lenItems === 3) {
      if (isFahrenheit() === false) {
        wrapperCars.childNodes[0].remove();
        wrapperCars.childNodes[0].remove();
        wrapperCars.childNodes[0].remove();

        setTimeout(() => {
          parseDataWeather(cardsArrays[0][1], 'Metric');
        }, 500);

        setTimeout(() => {
          parseDataWeather(cardsArrays[1][1], 'Metric');
        }, 600);
        setTimeout(() => {
          parseDataWeather(cardsArrays[2][1], 'Metric');
          cardsArrays.shift();
          cardsArrays.shift();
          cardsArrays.shift();
        }, 700);
      } else {
        wrapperCars.childNodes[0].remove();
        wrapperCars.childNodes[0].remove();
        wrapperCars.childNodes[0].remove();

        setTimeout(() => {
          parseDataWeather(cardsArrays[0][1], 'Imperial');
        }, 500);

        setTimeout(() => {
          parseDataWeather(cardsArrays[1][1], 'Imperial');
        }, 600);

        setTimeout(() => {
          parseDataWeather(cardsArrays[2][1], 'Imperial');
          cardsArrays.shift();
          cardsArrays.shift();
          cardsArrays.shift();
        }, 700);
      }
    }
  };

  return {
    drawCardContainer,
    drawCard,
    drawCardImage,
    drawLocationText,
    drawCardElements,
    icons,
    liElementTemp,
    liElement,
    getWeatherCity,
    parseDataWeather,
    changeWeatherMetric,
    isFahrenheit,
    addSpinner,
  };
})();

export default cardModule;