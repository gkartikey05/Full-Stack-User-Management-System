const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const databaseConnection = require("./config/dbConfig.js");
const authRouter = require("./routes/authRouter");
const app = express();

databaseConnection();
app.use(express());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/", (req, res) => res.status(200).json({ data: "JWT Auth Server" }));

module.exports = app;
