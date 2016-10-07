var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  fs.writeFile(__dirname+"/post.json", req.body, function(err) {
    if(err) {
       return console.log(err);
    }
    res.send('The file was saved!');
  }); 
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});