const express = require("express");
const app = express();
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/', function (req, res) {
    console.log('test');
    res.send('Saludos desde express');
  });