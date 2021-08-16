require('dotenv').config()
const express = require('express');
const cors = require('cors');

const db = require('./utils/mongo');

const app = express();
const PORT = process.env.PORT || 7777;

// Connect to database
db.connectToDatabase();

app.use(cors());

app.get('/', async (req, res) => {
  const database = db.getDb();
  const characters = database.collection('characters');

  characters.find({}).toArray(function (err, result) {
    if (err) {
      console.log(err);
      res.json({
        error: err
      });
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
