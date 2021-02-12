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

/*
app.get("/api/users/:userId/books/:bookId", (req, res) => {
  // access request params
  const { userId, bookId } = req.params;

  // find the user with specific id and find index of specific book with bookId
  const user = USERS.find((user) => user.id == userId);
  // validate user
  if (!user) {
    logger.error(`User with ${userId} not found.`);
    return res.status(400).send("User not found. Please try again.");
  }

  const bookList = user["list"]["books"];
  if (bookList == undefined) {
    logger.error(`Book list for user ${userId} not found/undefined.`);
    return res.status(400).send("Book not found. Please try again.");
  }

  // find specific book in the list based on bookId
  const book = bookList.find((book) => book.id == bookId);
  if (!book) {
    logger.error(`Book with ${bookId} not found.`);
    return res.status(400).send("Book not found. Please try again.");
  }
  res.json(book);
});
*/

// delete a book from personalized list of books
app.delete("/api/users/:userId/books/:bookId", (req, res) => {
  // access request params
  const { userId, bookId } = req.params;

  // find the user with specific id and find index of specific book with bookId
  const user = USERS.find((user) => user.id == userId);

  // validate user
  if (!user) {
    logger.error(`User with ${userId} not found.`);
    return res.status(400).send("User not found. Please try again.");
  }

  const bookList = user["list"]["books"];
  const index = bookList.findIndex((book) => book.id == bookId);

  // validate here
  if (index === -1) {
    logger.error(`Book with id ${bookId} not found.`);
    return res.status(400).send("Book not found. Please try again.");
  }

  // use splice method to remove 1 from array at index
  bookList.splice(index, 1);
  logger.info(`Book with id ${bookId} has been deleted.`);

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
