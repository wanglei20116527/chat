var express = require("express");

var app = express();

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use("/images", express.static('public/images'));
app.use("/js", express.static('public/js'));
app.use("/css", express.static('public/sass'));
app.use("/font", express.static('public/font'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000);
