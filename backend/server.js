const express = require("express");
var app = express();
const port = 5000;

// import the middleware to read the objects in json format
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/cleaningservice";

const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connection is successful");
  } catch (error) {
    console.log("error is occured: ", error);
  }
};
connection();
const usersRouter = require("./src/routes/users");
const adminRouter = require("./src/routes/admin");

app.use("/api", cors(), usersRouter);
app.use("/admin", cors(), adminRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
