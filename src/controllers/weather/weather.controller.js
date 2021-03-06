const service = require("./weather.service");

async function getWeatherByLatitudeAndLongitude(request, reply) {
  const { latitude, longitude, tempUpperTo } = request.body;
  const defaultTemp = process.env.WEATHER_TEMP;
  try {
    const weather = await service.getWeatherByLatitudeAndLongitude(latitude, longitude);
    const { current: { temp } } = weather;
    reply.code(200).send((temp > (tempUpperTo || defaultTemp)));
  } catch (e) {
    reply.code(500).send({ message: "Error getting weather!" });
  }
}

module.exports = { getWeatherByLatitudeAndLongitude };
