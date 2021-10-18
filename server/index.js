const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/user");

const app = express();

// middlewares
app.use(bodyParser.json());

// routes
app.use("/api/user/", userRoutes);

connectDB();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Running for life on ${port}`);
});
