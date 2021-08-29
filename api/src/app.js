const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
// const routes = require("./routes/index.js");

// require("./db.js");

const server = express();

server.name = "API";

server.use(express.json({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://dogs-breeds-jesus-a6d82.web.app/"
  ); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// server.use("/", routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).send(message);
});

server.get("/", (req, res) => {
  res.json("funcionando");
});
module.exports = server;
