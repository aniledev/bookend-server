// IMPORT REQUIRED LIBRARIES AND SECURITY PACKAGES
require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const winston = require("winston");
const { NODE_ENV, PORT, CLIENT_ORIGIN } = require("./config");
const errorHandler = require("./errorHandler");
const logger = require("./logger");
const uuid = require("uuid").v4;
const BOOKS = require("./codeDummyData");
const DATA = require("./dummyStore");
const USERS = require("./userStore");
const isEmail = require("email-validator");
const passwordValidator = require("password-validator");
const schema = new passwordValidator();
const resultRouter = express.Router();
schema.is().min(8).has().uppercase(1).has().lowercase(1).has().digits(1);

resultRouter
  .route("/")
  // get dummy data book list from the server
  .get((req, res) => {
    // declare a variable for the response
    let response = BOOKS;

    // destructure the request object to get the query
    const { title = "" } = req.query;

    // create a filtered list where the request query matches the store data
    if (title) {
      if (title.length < 3) {
        logger.error(
          `Invalid query input for title: ${title}. Character length not satisfied.`
        );
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
      logger.error(`Invalid query for ${title}. No matches found.`);
      return res.status(200).send("No matches found. Please try again.");
    }

    logger.info("Request successfully processed.");
    res.status(200).json(response);
  });

resultRouter
  .route("/:resultId")
  // get one individual book result from the server
  .get((req, res) => {
    const { resultId } = req.params;

    const book = BOOKS.find((book) => book.id == resultId);
    // validate book
    if (!book) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }
    logger.info("Result processed successfully.");
    res.status(200).json(book);
  });

module.exports = resultRouter;