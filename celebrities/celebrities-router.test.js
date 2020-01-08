const server = require("../api/server.js");
const request = require("supertest");
const testdb = require("../database/testdb.js");
const authenticate = require("../auth/authenticate-middleware.js");
beforeEach(testdb);
beforeEach(() => authenticate.mockClear());

describe("celebrities", () => {
  // no authentication
  it("get /", async () => {
    const res = await request(server).get("/");
    console.log("testing testing 1 2 3");
    expect(res.status).toBe(200);
    expect(authenticate).not.toBeCalled();
  });
  it("get nothing", async () => {
    const res = await request(server).get("/900");
    console.log("testing testing 4 5 6");
    expect(res.status).toBe(404);
    expect(authenticate).not.toBeCalled();
  });
});
