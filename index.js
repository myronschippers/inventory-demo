// node web app framework
const express = require('express');
const bodyParser = require('body-parser');
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

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

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

app.post('/inventory', (req, res) => {
  try {
    const newInventory = req.body;

    INVENTORY.push(newInventory);
  } catch (err) {
    res.sendStatus(500);
  }

  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
