var cors = require('cors');
var path = require('path');
var moment = require('moment');
var express =  require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();

app.use(express.static('Views'));
app.use(express.static('Public'));

app.use(bodyParser.json());
app.use(cors());

// app.get('/', function(req,res,next) {
//   var date = moment().format(" MMMM Do YYYY");
//   res.json('Hello World');
// });

app.get('/timestamp/:time', function(req,res) {
  var time = req.params.time;
  var unixTime = +moment();
  var data = { unix: unixTime, natural: time };
  res.json(data);
});

module.exports = app;

app.listen(port, function() {
  console.log('The server is now running on port ' + port);
});
