const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Connected to MongoDB");
});

const exerciserouter = require("./routes/exercises");
const userrouter = require("./routes/users");
app.use("/exercises", exerciserouter);
app.use("/users", userrouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
