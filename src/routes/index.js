const express = require("express");
const { addNewMessage, getLatestMessages, errorHandler } = require("../controllers");

const routes = express.Router();

routes.post("/addNewMessage", addNewMessage);
routes.get("/getLatestMessages", getLatestMessages);
routes.use(errorHandler);

module.exports = routes;
