const express = require("express");
const bodyParser = require("body-parser");
var qs = require('querystring');
const app = express();
app.listen(process.env.PORT || 3000);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });

  app.post('/', async function(req,res){
    //console.log(req.body.url);
    try{
      obj = await fetch(req.body.url, {method: 'HEAD'});
      var actualSong = obj.url.substring(obj.url.lastIndexOf("/") + 1,100);
      res.json({"url":actualSong});
    }catch(ex){
      res.sendStatus(500);
    }
  });