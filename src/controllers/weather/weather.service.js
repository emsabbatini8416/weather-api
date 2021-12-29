const rp = require('request-promise');

exports.getWeatherByLatitudeAndLongitude = (lat, lon) => {
  const KEY = process.env.WEATHER_KEY;
  const API = process.env.WEATHER_API;
  const UNITS = process.env.WEATHER_UNITS;

  return rp.get({
    url: `${API}?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${KEY}`,
    json: true
  });
};