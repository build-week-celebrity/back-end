const server = require("../api/server.js");
const request = require("supertest");
const testdb = require("../database/testdb.js");
const authenticate = require("../auth/authenticate.js");
jest.mock("../auth/authenticate.js");
beforeEach(testdb);
beforeEach(() => authenticate.mockClear());

describe("users", () => {
  // uses authentication
  it("gets users", async () => {
    authenticate.mockImplementationOnce((req, res, next) => {
      next();
    });
    const res = await request(server)
      .get("/api/users")
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2NlbHluIiwiaWF0IjoxNTc4NTg4OTE4LCJleHAiOjE1Nzg2NzUzMTh9.XO_b95AJFd93jEc65xi68KIYE1BZa0Y_NU55_UNhOJQ"
      );
    console.log(res.body, res.status, "res");
    expect(res.status).toBe(200);
  });

  it("allows user to edit score", async () => {
    const res = await request(server)
      .put("/api/users/2")
      .send({ score: 50 })
      .set(
        "Authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2NlbHluIiwiaWF0IjoxNTc4NTg4OTE4LCJleHAiOjE1Nzg2NzUzMTh9.XO_b95AJFd93jEc65xi68KIYE1BZa0Y_NU55_UNhOJQ"
      );
    console.log(res.body, res.status, "res");
    expect(res.status).toBe(200);
  });
});
