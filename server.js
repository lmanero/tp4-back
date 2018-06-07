var express = require('express');
var app = express();
var https = require('https');

var statesRouter = require('./states-router');
var citiesRouter = require('./cities-router');
var neighborhoodsRouter = require('./neighborhoods-router');


var server = app.listen(8081, function () {
  var host = "localhost";
  var port = "8081";
  console.log("Running on http://%s:%s", host, port);
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/states', statesRouter);
app.use('/cities', citiesRouter);
app.use('/neighborhoods', neighborhoodsRouter);



