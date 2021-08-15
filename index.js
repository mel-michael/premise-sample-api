const express = require('express');
const app = express();
const PORT = 7777;
const DATABASE_NAME = 'mydb';

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';

MongoClient.connect(uri, function (err, client) {
  if (err) throw err;
  const database = client.db(DATABASE_NAME);
  console.log(`You are now connected to ${DATABASE_NAME}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
