const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv");

dotenv.config();

fastify.get("/ping", (req, reply) => {
  reply.send("PONG!");
});

fastify.register(require("./routes/weather"));

fastify.listen(8080, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});

module.exports = fastify;
