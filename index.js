const express = require("express");
const app = express();
app.listen(process.env.PORT || 3000);

app.get('/', function (req, res) {
    console.log('test');
    res.send('Saludos desde express');
  });