const express = require("express");
const winston = require("winston");

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: "hello-world-service" },
  transports: [new winston.transports.Console()],
});

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  logger.debug("connection on route /");
  res.send("Hello World! v2");
});

app.get("/error", (req, res) => {
  logger.error("connection on route /error");
  res.send("error Logged");
});

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});
