var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//conversion
//called API
//celsius to fahrenheit conversion
app.post('/api/temperature/celsius/to/fahrenheit', function (req, res) {
  var celsius = req.body.celsius;
  var fahrenheit = celsius * 9 / 5 + 32; 
  res.json({ 'fahrenheit' : fahrenheit });
});

//fahrenheit to celsius conversion
app.post('/api/temperature/fahrenheit/to/celcius', function (req, res) {
  var fahrenheit = req.body.fahrenheit;
  var celsius = fahrenheit - 32 * 5 / 9; 
  res.json({ 'celsius' : celsius });
});

//kelvin to celsius and fahrenheit conversion
app.post('/api/temperature/kelvin/to/celsiusfahrenheit', function (req, res) {
  var kelvin = req.body.kelvin;
  var celsius = kelvin - 273.15; //formula for convertion kelvin to celsius
  var fahrenheit = kelvin * 9 / 5 - 459.67; //formula for conversion kelvin to fahrenheit
  res.json({ 'celsius' : celsius, 'fahrenheit' : fahrenheit }); 
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
