// IMPORT REQUIRED LIBRARIES AND SECURITY PACKAGES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
const { NODE_ENV, PORT, CLIENT_ORIGIN } = require("./config");
const errorHandler = require("./errorHandler");
const userRouter = require("./userRouter");
const resultRouter = require("./resultRouter");
const logger = require("./logger");
const uuid = require("uuid").v4;
const BOOKS = require("./codeDummyData");
const USERS = require("./userStore");
const isEmail = require("email-validator");
const passwordValidator = require("password-validator");
const schema = new passwordValidator();

schema.is().min(8).has().uppercase(1).has().lowercase(1).has().digits(1);

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "dev";

//STANDARD MIDDLEWARE
app.use(morgan(morganOption));
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);
app.use(express.json());

// API KEY HANDING ON THE SERVER IF NECESSARY

//ROUTES
app.use("/api/users", userRouter);
app.use("/api/results", resultRouter);

// test api endpoint
app.get("/api", (req, res) => {
  res.json({ ok: true });
});

// test express app wiring
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// CATCH ANY THROWN ERRORS AND THEN DEFINE THE ERROR AND KEEP THE APPLICATION RUNNING;
//STILL MIDDLEWARE
app.use(errorHandler);

//PIPELINE ENDS
module.exports = app;
