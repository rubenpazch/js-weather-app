export const cardFactory = () => {
  let longitude = 0;
  let latitude = 0;
  let main = '';
  let description = '';
  let icon = '';
  let temp = 0;
  let feelsLike = 0;
  let tempMin = 0;
  let tempMax = 0;
  let pressure = 0;
  let humidity = 0;
  let visibility = 0;
  let cityName = '';

  const getVisibility = () => visibility;
  const setVisibility = pVisibility => {
    visibility = pVisibility;
  };
  const getLongitude = () => longitude;
  const setLongitude = pLongitude => {
    longitude = pLongitude;
  };
  const getLatitude = () => latitude;
  const setLatitude = pLatitude => {
    latitude = pLatitude;
  };
  const getMain = () => main;
  const setMain = pMain => {
    main = pMain;
  };
  const getDescription = () => description;
  const setDescription = pDescription => {
    description = pDescription;
  };
  const getIcon = () => icon;
  const setIcon = pIcon => {
    icon = pIcon;
  };
  const getTemp = () => temp;
  const setTemp = pTemp => {
    temp = pTemp;
  };
  const getFeelsLike = () => feelsLike;
  const setFeelsLike = pFeelsLike => {
    feelsLike = pFeelsLike;
  };
  const getCityName = () => cityName;
  const setCityName = pCityName => {
    cityName = pCityName;
  };
  const getPressure = () => pressure;
  const setPressure = pPressure => {
    pressure = pPressure;
  };
  const getHumidity = () => humidity;
  const setHumidity = pHumidity => {
    humidity = pHumidity;
  };
  const getTempMin = () => tempMin;
  const setTempMin = pTempMin => {
    tempMin = pTempMin;
  };
  const getTempMax = () => tempMax;
  const setTempMax = pTempMax => {
    tempMax = pTempMax;
  };

  return {
    getLongitude,
    setLongitude,
    getLatitude,
    setLatitude,
    getMain,
    setMain,
    getDescription,
    setDescription,
    getIcon,
    setIcon,
    getTemp,
    setTemp,
    getFeelsLike,
    setFeelsLike,
    getCityName,
    setCityName,
    getPressure,
    setPressure,
    getHumidity,
    setHumidity,
    getTempMin,
    setTempMin,
    getTempMax,
    setTempMax,
    getVisibility,
    setVisibility,
  };
};

export default cardFactory;