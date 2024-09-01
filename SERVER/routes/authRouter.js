const express = require("express");
const {
  userSignUp,
  userLogin,
  getUserDetails,
} = require("../controllers/authController.js");
const signupValidator = require("../middleware/signupValidator.js");
const loginValidator = require("../middleware/loginValidator.js");
const authenticateUser = require("../middleware/authenticateUser.js");

const userRoute = express.Router();

userRoute.post("/signup", signupValidator, userSignUp);

userRoute.post("/login", loginValidator, userLogin);

userRoute.get("/", authenticateUser, getUserDetails);

module.exports = userRoute
