// node web app framework
const express = require('express');
// instantiate server app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.listen(8080);
