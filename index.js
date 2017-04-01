'use strict';
var express = require('express');
var handlebars = require('express-handlebars');

var app = express();

app.engine('handlebars', handlebars.create({}).engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {
    googleApiKey: process.env.googleApiKey
  });
});

app.get('/geocode', function(req, res) {
  // console.log('req.: ', req.);
});

var port = process.env.PORT || 3000;
module.exports = app.listen(port);
