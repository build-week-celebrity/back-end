const server = require("../api/server.js");
const request = require("supertest");
const testdb = require("../database/testdb.js");
const authenticate = require("./authenticate.js");
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");
jest.mock("./authenticate.js");
beforeEach(testdb);
beforeEach(() => authenticate.mockClear());

describe("login and register", () => {
  // no authentication

  it("registers a user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({
        username: "asdfasdfasdfjoscelyn",
        password: "asdfasdfasdfsadfpikachu",
        email: "asdfasdfasdfsadfsadfemail"
      })
      .set("Content-Type", "application/json");

    expect(res.status).toBe(201);
    expect(authenticate).not.toBeCalled();
  });

  it("logs in a user", async () => {
    const hash = bcrypt.hashSync("yoshi", 8);

    Users.addUser({ username: "mario", password: hash });

    const res = await request(server)
      .post("/api/auth/login")
      .send({
        username: "mario",
        password: "yoshi"
      })
      .set("Content-Type", "application/json");

    expect(res.status).toBe(200);
    expect(authenticate).not.toBeCalled();
  });
});
