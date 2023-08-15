//const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();
const cors = require("./startup/cors.js");

//require("./startup/logging")();
//require("./startup/cors")(app);
cors(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

const port = process.env.PORT || config.get("port");
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);

module.exports = server;
