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
const DATA = require("./dummyStore");
const USERS = require("./userStore");
const isEmail = require("email-validator");
const passwordValidator = require("password-validator");
const schema = new passwordValidator();
const userRouter = express.Router();
schema.is().min(8).has().uppercase(1).has().lowercase(1).has().digits(1);

userRouter.route("/").get((req, res) => {
  // declare a response variable of all users because this is the data we need to access and check
  let response = USERS;

  // access the request body using object destructuring
  const { email } = req.body;

  // user does not input email
  if (!email) {
    logger.info("Request processed successfully!");
    return res.json(response);
  }
  // email address format is wrong
  if (!isEmail.validate(email)) {
    logger.error(`Invalid email '${email}' entered.`);
    return res
      .status(400)
      .send("Email must be a valid email address. Please try again.");
  }
  // email length is wrong
  if (email.length < 3 || email.length > 320) {
    return res.status(400).send("Email must be between 8 and 100 characters.");
  }
  // the email entered isn't found
  if (USERS.filter((user) => user.email == email).length === 0) {
    logger.error(`Email '${email}' not  found.`);
    return res.status(400).send("Email not found. Please try again.");
  } else {
    // email passes validation
    logger.info("Request processed successfully!");
    response = USERS.filter((user) => user.email == email);
    return res.json(response);
  }
});

module.exports = userRouter;
