const path = require('path');
const https = require('https');
const fs = require('fs');
const express = require('express');

//setup route middlewares
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
 
module.exports.app = app;
