const { getWeatherByLatitudeAndLongitude } = require("../controllers/weather/weather.controller");

const getWeatherByLatitudeAndLongitudeOpts = {
  schema: {
    response: {
      200: {
        type: "boolean",
      },
    },
  },
  handler: getWeatherByLatitudeAndLongitude,
};

async function routes(fastify) {
  fastify.post("/weather", getWeatherByLatitudeAndLongitudeOpts);
}

module.exports = routes;
