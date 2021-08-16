const { MongoClient } = require('mongodb');

const dbConfig = require('../config/database');
const { host, dbName } = dbConfig;

const uri = `mongodb://${host}?writeConcern=majority`;

let connectedDb;

module.exports = {
  connectToDatabase: async () => {
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
      if (err) {
        console.log(err);
        return err;
      }
      connectedDb = client.db(dbName);
      console.log(`Connection established with "${dbName}" database`);
    });
  },

  getDb() {
    return connectedDb;
  },

  disconnectDb: async () => {
    return await client.close();
  }
};
