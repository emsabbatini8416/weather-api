const fastify = require("../../src/index");

describe("server test", () => {
  afterEach(() => {
    fastify.close();
  });

  test("responds with success on request /ping", async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/ping",
    });
    expect(response.statusCode).toBe(200);
    expect(response.payload).toBe("PONG!");
  });
});
