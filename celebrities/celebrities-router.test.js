const server = require("../api/server.js");
const request = require("supertest");
const testdb = require("../database/testdb.js");
const authenticate = require("../auth/authenticate-middleware.js");
jest.mock("../auth/authenticate-middleware.js");
beforeEach(testdb);
beforeEach(() => authenticate.mockClear());

describe("celebrities", () => {
  // no authentication
  it("get /", async () => {
    const res = await request(server).get("/");
    // console.log(res.body, res.status, "res");
    expect(res.status).toBe(200);
    expect(authenticate).not.toBeCalled();
  });
  it("gets nothing at a random endpoint", async () => {
    const res = await request(server).get("/pikachu");
    // console.log(res.body, res.status, "res");
    expect(res.status).toBe(404);
    expect(authenticate).not.toBeCalled();
  });

  it("returns array of celebrities", async () => {
    const res = await request(server).get("/api/celebrities");
    expect(res.status).toBe(200);
    expect(authenticate).not.toBeCalled();
    expect(res.body).toHaveLength(86);
  });
});
