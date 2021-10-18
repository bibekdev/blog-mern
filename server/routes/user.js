const express = require("express");
const { register } = require("../controllers/user");

const routes = express.Router();

routes.post("/signup", register);

module.exports = routes;
