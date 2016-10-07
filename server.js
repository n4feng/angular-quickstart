// set up
var express = require('express');
var app = express();
var fs = require('fs');
var saveCount = 1;
//functions
// application -------------------------------------------------------------
app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  fs.writeFile(__dirname+"/save/post"+saveCount.toString()+".json", req.body, function(err) {
    if(err) {
       return console.log(err);
    }
    res.send('The file was saved!');
  }); 
  saveCount++;
});

//listen
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});