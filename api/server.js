const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
