// IMPORT REQUIRED LIBRARIES AND SECURITY PACKAGES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
const { NODE_ENV, PORT, CLIENT_ORIGIN } = require("./config");
const errorHandler = require("./errorHandler");
const router = require("./router");
const logger = require("./logger");
const DATA = require("./dummyStore");
const USERS = require("./userStore");

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

//ROUTES

// TEST API

// get dummy data book list from the server
app.get("/api/results", (req, res) => {
  // use validation to send back a filtered list based on req.body
  res.send("This endpoint returns all books from server.");
});

// get one individual book result from the server
app.get("/api/results/:resultId", (req, res) => {
  res.send("This endpoint returns one individual book from server.");
});

// get personalized list of books for a user
app.get("/api/users/:userId/books", (req, res) => {
  res.send(
    "This endpoint returns the user's personalized list from the server."
  );
});

// posts a new book to the users personalized/saved list
app.post("/api/users/:userId/books", (req, res) => {
  res.send(
    "This endpoint posts a new book to the user's personalized list on the server."
  );
});

// delete a book from personalized list of books
app.delete("/api/users/:userId/books/:bookId", (req, res) => {
  res.send(
    "This endpoint deletes a book from the user's personalized list on the server."
  );
});

// get all user information from the server for each user
app.get("/api/users", (req, res) => {
  // declare a response variable of all users because this is the data we need to access and check
  let response = USERS;

  // access the request body using object destructuring
  const { email } = req.body;

  if (!email) {
    res.json(response);
  } else {
    response = USERS.filter((user) => user.email == email);

    res.send(response);
  }
});

// post a single user to the list of users on the server
app.post("/api/users", (req, res) => {
  res.send(
    "This endpoint adds/posts a single user's information to the server."
  );
});

// gets the user info for one specific user
app.get("/api/users/:userId", (req, res) => {
  // declare a response variable of all users because this is the data we need to access and check
  let response = USERS;

  // access the request body using object destructuring
  const { userId } = req.params;

  response = USERS.filter((user) => user.id == userId);

  res.send(response);
});

// deletes the info from the server for one specific user. deleting an account
app.delete("/api/users/:userId", (req, res) => {
  res.send(
    "This endpoint deletes a specific user info from the server for a single user."
  );
});

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
