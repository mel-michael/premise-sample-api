const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const DATABASE_NAME = 'breakingbad';

let connectedDb;

module.exports = {
  connectToDatabase: async () => {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
      if (err) {
        console.log(err);
        return err;
      }
      connectedDb = client.db(DATABASE_NAME);
      console.log(`Connection established with "${DATABASE_NAME}" database`);
    });
  },

  getDb() {
    return connectedDb;
  },

  disconnectDb: async () => {
    return await client.close();
  }
};
