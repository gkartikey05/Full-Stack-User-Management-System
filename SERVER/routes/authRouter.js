const express = require("express");
const {
  signUp,
  signIn,
  userInfo,
  signOut,
} = require("../controllers/authController");
const authRouter = express.Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.get("/user-info", userInfo);
authRouter.get("/sign-out", signOut);

module.exports = authRouter;
