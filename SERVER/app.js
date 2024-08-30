const express = require("express");
const cors = require('cors')
const authRouter = require("./routes/authRouter");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express())
app.use(cookieParser())
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use('/api/v2/', authRouter)
app.use("/", (res) => res.status(200).json({ data: "JWT Auth Server" }));

module.exports = app;
