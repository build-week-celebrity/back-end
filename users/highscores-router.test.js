const server = require("../api/server.js");
const request = require("supertest");
const testdb = require("../database/testdb.js");
const authenticate = require("../auth/authenticate.js");
jest.mock("../auth/authenticate.js");
beforeEach(testdb);
beforeEach(() => authenticate.mockClear());

describe("highscores", () => {
  // no authentication
  it("returns list of user objects", async () => {
    const res = await request(server).get("/api/highscores");
    console.log(res.body, res.status, "res");
    expect(res.status).toBe(200);
    expect(authenticate).not.toBeCalled();
  });
});
