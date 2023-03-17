// node web app framework
const express = require('express');
// instantiate server app
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

// CRUD = DB => Server
// C: Create => post
// R: Read   => get
// U: Update => put
// D: Delete => delete

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
