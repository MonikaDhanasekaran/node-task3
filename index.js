const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mentorRouter = require("./mentorRouter");
const studentRouter = require("./studentRouter");

const mongo = require("./connect");
mongo.connect();

const app = express();

app.use(express.json());  

app.get("/", (res) =>
  res.send(`Server Running`)
);

app.use("/mentor",mentorRouter);

app.use("/student",studentRouter);

app.listen(process.env.PORT);