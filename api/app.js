var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/temperature/celsius/to/fahrenheit', function (req, res) {
  var celsius = req.body.celsius;
  var fahrenheit = celsius * 9 / 5 + 32;
  res.json({ 'fahrenheit' : fahrenheit });
});

app.post('/api/temperature/fahrenheit/to/celsius', function (req, res) {
  var fahrenheit = req.body.fahrenheit;
  var celsius = fahrenheit - 32 * 5 / 9;
  res.json({ 'celsius' : celsius });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
