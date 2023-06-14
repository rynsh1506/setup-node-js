const express = require("express");
const error = require("./middlewares/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const catchAsyncErrors = require("./middlewares/catchAsyncErrors");

// midleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Import routes

// Register routes
app.get(
    "/",
    catchAsyncErrors(async (req, res, next) => {
        res.send("Selamat Datang Di Book Strore API");
    })
);

// midleware error
app.use(error);

module.exports = app;
