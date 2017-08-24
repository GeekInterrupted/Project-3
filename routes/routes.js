
// require express for routing
const express = require("express");
// Create Instance of Express
const app = express();

// Require controller
// const dbController = require ("../controller/dbController");
const getEmbassy = require ("../controller/getEmbassy");

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/dist/index.html");
});

// This is the route we will send POST requests to save each news.
app.post("/embassy", getEmbassy.getEmbassy);

module.exports = app;