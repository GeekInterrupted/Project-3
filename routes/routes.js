
// require express for routing
const express = require("express");
// Create Instance of Express
const app = express();

// Require controller
const dbController = require ("../controller/dbController");
const getEmbassy = require ("../controller/getEmbassy");;

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/dist/index.html");
});

// This is the route we will send all comments back to front end.
app.get("/get/comments/:country", dbController.getComments);

// This is the route we will send country name to get embassy address and warnings.
app.post("/embassy", getEmbassy.getEmbassy);

// This is the route we will send POST requests to save each comment.
app.post("/post/comment", dbController.postComment);

// This is the route we will send POST requests to save each like.
app.post("/post/like", dbController.postLike);

module.exports = app;