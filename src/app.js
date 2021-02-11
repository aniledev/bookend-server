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

// TEST API

// get dummy data book list from the server
app.get("/api/results", (req, res) => {
  // declare a variable for the response
  let response = BOOKS;

  // destructure the request object to get the query
  const { title = "" } = req.query;

  // create a filtered list where the request query matches the store data
  if (title) {
    if (title.length < 3) {
      return res
        .status(400)
        .send("Title much be greater than 3 characters. Please try again.");
    } else {
      response = BOOKS.filter((book) =>
        book["title"].toLowerCase().includes(title.toLowerCase())
      );
    }
  }

  if (response.length < 1 || response == undefined) {
    return res.status(200).send("No matches found. Please try again.");
  }

  res.status(200).send(response);
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


// post a single user to the list of users on the server
app.post("/api/users", (req, res) => {
  // use object destructuring for the request body
  const { name, email, password } = req.body;

  // validate if any field in the object is empty
  for (const query of ["name", "email", "password"]) {
    if (!req.body[query]) {
      logger.error(`The field '${query}' is required.`);
      return res
        .status(400)
        .send(`The field '${query}' is required. Please try again.`);
    }
  }

  // validate if the field is not a string
  for (const query of ["name", "email", "password"]) {
    if (typeof req.body[query] !== "string") {
      logger.error(`The field '${query}' must be a string.`);
      return res
        .status(400)
        .send(
          `The field '${query}' is incorrectly formatted. Please try again.`
        );
    }
  }

  // email address format is wrong
  if (!isEmail.validate(email)) {
    logger.error(`Invalid email '${email}' entered.`);
    return res
      .status(400)
      .send("Email must be a valid email address. Please try again.");
  }

  // if password format is wrong
  if (!schema.validate(password)) {
    logger.error(
      `Invalid password '${password}' entered. The following rules failed: ${schema.validate(
        password,
        { list: true }
      )}`
    );
    return res
      .status(400)
      .send("Password must be a valid password. Please try again.");
  }

  // validate if the name field is not the correct length
  if (name.length < 3 || name.length > 50) {
    return res.status(400).send("Name must be between 3 and 50 characters.");
  }
  // validate if the email field is not the correct length
  if (email.length < 3 || email.length > 320) {
    return res.status(400).send("Email must be between 3 and 320 characters.");
  }

  // create a new object to push to the store based on req body after validation
  const user = { id: uuid(), name, email, password };

  // push the newly created object to the store

  USERS.push(user);

  logger.info(`New user with id ${user.id} created successfully!`);

  // return the appropriate status code and end()
  return res.status(200).send("New user created!");
});

// gets the user info for one specific user
app.get("/api/users/:userId", (req, res) => {
  // access the request object using object destructuring
  const { userId } = req.params;

  // use the find method to find user with a specific id
  const user = USERS.find((user) => user.id == userId);

  // validate if no user with that id is found
  if (!user) {
    logger.error(`User with ${userId} not found.`);
    return res.status(400).send("User not found. Please try again.");
  }
  res.status(200).send(user);
});

// deletes the info from the server for one specific user. deleting an account
app.delete("/api/users/:userId", (req, res) => {
  // destructure the req object to get the id of the user we want to delete
  const { userId } = req.params;

  // use the find index method to find the index of the user in the array that we want to delete
  const index = USERS.findIndex((user) => user.id === userId);
  // validate here
  if (index === -1) {
    logger.error(`User with id ${userId} not found.`);
    return res.status(400).send("User not found. Please try again.");
  }

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
