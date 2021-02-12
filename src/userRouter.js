require("dotenv").config();
const express = require("express");
const userRouter = express.Router();
const bodyParser = express.json();
const logger = require("./logger");
const uuid = require("uuid").v4;
const USERS = require("./userStore");
const isEmail = require("email-validator");
const passwordValidator = require("password-validator");
const schema = new passwordValidator();
schema.is().min(8).has().uppercase(1).has().lowercase(1).has().digits(1);
const isURL = require("url-validator");

userRouter
  .route("/")
  .get((req, res) => {
    let response = USERS;

    const { email } = req.body;

    // VALIDATE EMAIL INPUT
    if (!email) {
      logger.info("Request processed successfully!");
      return res.json(response);
    }

    if (!isEmail.validate(email)) {
      logger.error(`Invalid email '${email}' entered.`);
      return res
        .status(400)
        .send("Email must be a valid email address. Please try again.");
    }

    if (email.length < 3 || email.length > 320) {
      return res
        .status(400)
        .send("Email must be between 8 and 100 characters.");
    }
    // VALIDATE THE EMAIL ENTERED ISN'T FOUND
    if (USERS.filter((user) => user.email == email).length === 0) {
      logger.error(`Email '${email}' not  found.`);
      return res.status(400).send("Email not found. Please try again.");
    } else {
      // EMAIL PASSES VALIDATION
      logger.info("Request processed successfully!");
      response = USERS.filter((user) => user.email == email);
      return res.json(response);
    }
  })
  // POST A SINGLE USER TO THE LIST OF USERS ON THE SERVER
  .post(bodyParser, (req, res) => {
    const { name, email, password } = req.body;

    // VALIDATE IF ANY FIELD IN THE OBJECT IS EMPTY
    for (const query of ["name", "email", "password"]) {
      if (!req.body[query]) {
        logger.error(`The field '${query}' is required.`);
        return res
          .status(400)
          .send(`The field '${query}' is required. Please try again.`);
      }
    }

    // VALIDATE IF THE FIELD IS NOT A STRING
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

    // VALIDATE EMAIL ADDRESS FORMAT
    if (!isEmail.validate(email)) {
      logger.error(`Invalid email '${email}' entered.`);
      return res
        .status(400)
        .send("Email must be a valid email address. Please try again.");
    }

    // VALIDATE PASSWORD FORMAT
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

    // VALIDATE FIELD LENGTHS
    if (name.length < 3 || name.length > 50) {
      return res.status(400).send("Name must be between 3 and 50 characters.");
    }
    if (email.length < 3 || email.length > 320) {
      return res
        .status(400)
        .send("Email must be between 3 and 320 characters.");
    }

    // CREATE A NEW OBJECT TO PUSH TO THE STORE BASED ON REQ BODY AFTER VALIDATION
    const user = { id: uuid(), name, email, password };
    USERS.push(user);
    logger.info(`New user with id ${user.id} created successfully!`);

    return res.status(200).send("New user created!");
  });

userRouter
  .route("/:userId")
  // GETS THE USER INFO FOR ONE SPECIFIC USER
  .get((req, res) => {
    const { userId } = req.params;

    const user = USERS.find((user) => user.id == userId);

    // VALIDATE IF NO USER WITH THAT ID IS FOUND
    if (!user) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }
    res.status(200).json(user);
  })
  // DELETES THE INFO FROM THE SERVER FOR ONE SPECIFIC USER
  .delete((req, res) => {
    const { userId } = req.params;

    const index = USERS.findIndex((user) => user.id === userId);

    // INDEX === -1 MEANS ITEM IS NOT IN ARRAY/ NOT FOUND
    if (index === -1) {
      logger.error(`User with id ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }

    USERS.splice(index, 1);
    logger.info(`User with id ${userId} has been deleted.`);
    res.status(204).end();
  });

userRouter
  .route("/:userId/books")
  // GET PERSONALIZED LIST OF BOOKS FOR A SPECIFIC USER
  .get((req, res) => {
    const { userId } = req.params;

    const user = USERS.find((user) => user.id == userId);

    // VALIDATE IF USERID IS NOT FOUND
    if (!user) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }

    logger.info("Request processed successfully!");
    res.status(200).json(user["list"]);
  })
  // POSTS A NEW BOOK TO THE USERS PERSONALIZED/SAVED LIST
  .post(bodyParser, (req, res) => {
    const { userId } = req.params;
    const {
      title,
      isbn,
      pageCount,
      publishedDate,
      thumbnailUrl,
      shortDescription,
      longDescription,
      status,
      authors,
      categories,
    } = req.body;

    // VALIDATE IF ANY FIELD IN THE OBJECT IS EMPTY
    for (const query of [
      "title",
      "authors",
      "shortDescription",
      "categories",
      "thumbnailUrl",
    ]) {
      if (!req.body[query]) {
        logger.error(`The field '${query}' is required.`);
        return res
          .status(400)
          .send(`The field '${query}' is required. Please try again.`);
      }
    }

    // VALIDATE IF THE FIELD IS NOT A STRING
    for (const query of ["authors", "categories"]) {
      if (!Array.isArray(req.body[query])) {
        logger.error(`The field '${query}' must be a array.`);
        return res
          .status(400)
          .send(
            `The field '${query}' is incorrectly formatted. Please try again.`
          );
      }
    }

    // VALIDATE THAT THE THUMBNAIL IS AN IMAGE URL
    if (!isURL(thumbnailUrl)) {
      logger.error(`The field '${thumbnailUrl}' must be a valid URL.`);
      return res
        .status(400)
        .send(
          `The field '${thumbnailUrl}' is incorrectly formatted. Please try again.`
        );
    }

    // FIND THE USER WITH SPECIFIC ID AND FIND INDEX OF SPECIFIC BOOK WITH BOOKID
    const user = USERS.find((user) => user.id == userId);

    if (!user) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }

    const bookList = user["list"]["books"];
    if (bookList == undefined) {
      logger.error(`Book list for user ${userId} not found/undefined.`);
      return res.status(400).send("Book not found. Please try again.");
    }

    const book = {
      id: uuid(),
      title,
      isbn: "",
      pageCount: "",
      publishedDate: "",
      thumbnailUrl,
      shortDescription,
      longDescription: "",
      status: "",
      authors: authors,
      categories,
    };

    bookList.push(book);

    logger.info(`New book with id ${book.id} created successfully!`);

    return res.status(200).send("New book created!");
  });

userRouter
  .route("/:userId/books/:bookId")
  // GET ONE INDIVIDUAL BOOK FROM A USERS LISTS
  .get((req, res) => {
    // access request params
    const { userId, bookId } = req.params;

    // FIND THE USER WITH SPECIFIC ID AND FIND INDEX OF SPECIFIC BOOK WITH BOOKID
    const user = USERS.find((user) => user.id == userId);

    if (!user) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }

    const bookList = user["list"]["books"];
    if (bookList == undefined) {
      logger.error(`Book list for user ${userId} not found/undefined.`);
      return res.status(400).send("Book not found. Please try again.");
    }

    // FIND SPECIFIC BOOK IN THE LIST BASED ON BOOKID
    const book = bookList.find((book) => book.id == bookId);
    if (!book) {
      logger.error(`Book with ${bookId} not found.`);
      return res.status(400).send("Book not found. Please try again.");
    }
    res.json(book);
  })
  // DELETE A BOOK FROM PERSONALIZED LIST OF BOOKS
  .delete((req, res) => {
    const { userId, bookId } = req.params;

    const user = USERS.find((user) => user.id == userId);

    if (!user) {
      logger.error(`User with ${userId} not found.`);
      return res.status(400).send("User not found. Please try again.");
    }

    const bookList = user["list"]["books"];
    const index = bookList.findIndex((book) => book.id == bookId);

    if (index === -1) {
      logger.error(`Book with id ${bookId} not found.`);
      return res.status(400).send("Book not found. Please try again.");
    }

    bookList.splice(index, 1);
    logger.info(`Book with id ${bookId} has been deleted.`);

    res.status(204).end();
  });

module.exports = userRouter;
