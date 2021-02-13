// IMPORT REQUIRED LIBRARIES AND SECURITY & LOGGING PACKAGES
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { NODE_ENV, CLIENT_ORIGIN } = require("./config");
const userRouter = require("./userRouter");
const resultRouter = require("./resultRouter");
const errorHandler = require("./errorHandler");

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

// TEST API/EXPRESS WIRING
app.get("/api", (req, res) => {
  res.json({ ok: true });
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// CATCH ANY THROWN ERRORS AND THEN DEFINE THE ERROR AND KEEP THE APPLICATION RUNNING;
//STILL MIDDLEWARE
app.use(errorHandler);

//PIPELINE ENDS
module.exports = app;
