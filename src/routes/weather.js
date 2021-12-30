const { getWeatherByLatitudeAndLongitude } = require("../controllers/weather/weather.controller");

const getWeatherByLatitudeAndLongitudeOpts = {
  schema: {
    body: {
      type: "object",
      properties: {
        latitude: { type: "string" },
        longitude: { type: "string" },
        tempUpperTo: { type: "integer" },
      },
    },
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
