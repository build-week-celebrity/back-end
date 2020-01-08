const server = require("../api/server.js");
const request = require("supertest");
const testdb = require("../database/testdb.js");
const authenticate = require("../auth/authenticate-middleware.js");
beforeEach(testdb);
beforeEach(() => authenticate.mockClear());

describe("celebrities", () => {});
