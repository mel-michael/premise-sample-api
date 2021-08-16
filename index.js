const express = require('express');
const db = require('./mongo');

const app = express();
const PORT = 7777;

// Connect to database
db.connectToDatabase();

app.get('/', async (req, res) => {
  const database = db.getDb();
  const characters = database.collection('characters');

  const cursor = characters.find({});
  console.log('CHAr=====:', characters);

  characters.find({}).toArray(function (err, result) {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
