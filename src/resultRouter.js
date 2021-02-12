require("dotenv").config();
const express = require("express");
const resultRouter = express.Router();
const logger = require("./logger");
const BOOKS = require("./codeDummyData");

resultRouter
  .route("/")
  // GET DUMMY DATA BOOK LIST FROM THE SERVER
  .get((req, res) => {
    let response = BOOKS;

    const { title = "" } = req.query;

    // VALIDATE TITLE
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

    // VALIDATE RESPONSE
    if (response.length < 1 || response == undefined) {
      logger.error(`Invalid query for ${title}. No matches found.`);
      return res.status(200).send("No matches found. Please try again.");
    }

    logger.info("Request successfully processed.");
    res.status(200).json(response);
  });

resultRouter
  .route("/:resultId")
  // GET ONE INDIVIDUAL BOOK RESULT FROM THE SERVER
  .get((req, res) => {
    const { resultId } = req.params;

    const book = BOOKS.find((book) => book.id == resultId);
    // VALIDATE IF NO PARAMS MATCH
    if (!book) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }

    logger.info("Result processed successfully.");
    res.status(200).json(book);
  });

module.exports = resultRouter;
