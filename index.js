// node web app framework
const express = require('express');
// instantiate server app
const app = express();
const PORT = 8080;

// Make full '/inventory' route
const INVENTORY = [
  {
    name: 'Chips',
    type: 'food',
    status: 'home',
    quantity: 3,
  },
  {
    name: 'Dr. Tran',
    type: 'movie',
    status: 'home',
    quantity: 1,
  },
  {
    name: 'Skies',
    type: 'recreation',
    status: 'home',
    quantity: 2,
  },
];

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

// CRUD = DB => Server
// C: Create => post
// R: Read   => get "GET"
// U: Update => put
// D: Delete => delete

// GET for inventory
app.get('/inventory', (req, res) => {
  res.send(INVENTORY);
});

// thought experiment LAST ITEM
app.get('/inventory/last-item', (req, res) => {
  res.send(INVENTORY[INVENTORY.length - 1]);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
