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
const uuid = require("uuid").v4;
const DATA = require("./dummyStore");
const USERS = require("./userStore");
const isEmail = require("email-validator");

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

  // user does not input email
  if (!email) {
    return res.json(response);
  }
  // email address format is wrong
  if (!isEmail.validate(email)) {
    logger.error(`Invalid email '${email}' entered.`);
    return res
      .status(400)
      .send("Email must be a valid email address. Please try again.");
  }
  // the email entered isn't found
  if (USERS.filter((user) => user.email == email).length === 0) {
    return res.status(400).send("Email not found. Please try again.");
  } else {
    // email passes validation
    response = USERS.filter((user) => user.email == email);
    return res.json(response);
  }
});

// post a single user to the list of users on the server
app.post("/api/users", (req, res) => {
  // use object destructuring for the request body
  const { name, email, password } = req.body;

  // validate if any field in the object is empty
  for (const query of ["name", "email", "password"]) {
    if (!req.body[query]) {
      logger.error(`${query} is required.`);
      return res.status(400).send(`${query} is required. Please try again.`);
    }

    // create a new object to push to the store based on req body after validation
    const user = { id: uuid(), name, email, password };

    // push the newly created object to the store

    USERS.push(user);

    logger.info(`New user with id ${user.id} created successfully!`);

    // return the appropriate status code and end()
    return res.status(200).json(user);
  }
});

// gets the user info for one specific user
app.get("/api/users/:userId", (req, res) => {
  // declare a response variable of all users because this is the data we need to access and check
  let response = USERS;

  // access the request object using object destructuring
  const { userId } = req.params;

  response = USERS.filter((user) => user.id == userId);

  res.send(response);
});

// deletes the info from the server for one specific user. deleting an account
app.delete("/api/users/:userId", (req, res) => {
  // destructure the req object to get the id of the user we want to delete
  const { userId } = req.params;

  // use the find index method to find the index of the user in the array that we want to delete
  const index = USERS.findIndex((user) => user.id === userId);
  // validate here

  // use the splice method to remove 1 from the array at the index number, end()
  USERS.splice(index, 1);
  logger.info(`User with id ${userId} has been deleted.`);
  res.status(204).end();
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
