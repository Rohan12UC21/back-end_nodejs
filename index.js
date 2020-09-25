// ./src/index.js

// importing the dependencies
const express = require("express");
const mongoose = require('mongoose');
const dbHandler = require('./database/mongo');

// defining the Express app
const app = express();

// import routes
const authRoutes = require("./routes/auth");

// middleware
app.use(express.json()); // for body parser

// route middleware
app.use("/api/user", authRoutes)

// start the in-memory MongoDB instance
dbHandler.connect().then(async () => {
    console.log("Connected to the in-memeory MongoDB")
});

// starting the server
app.listen(8000, () => {
    console.log("listening on port 8000")
});
