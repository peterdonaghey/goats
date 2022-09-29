import { MongoClient } from 'mongodb';

let dbClient = null;

export const connect = async (url) => {
  if (dbClient) {
    return dbClient;
  }

  try {
    console.log(`Connecting to mongo db at ${url}`);

    const client = await MongoClient.connect(url, {
      useNewUrlParser: true, // new url parser
      useUnifiedTopology: true, // new connection engine
      maxPoolSize: 10 // how many connections can be made
    });
    
    dbClient = client;
    return dbClient;
  } catch(e) {
    console.log(e);
  }

};

const getDB = async (dbName) => {
  if (!dbClient) {
    throw new Error('Must call "connect" before calling getDB.')
  }
  return dbClient.db(dbName);
};

export const collection = async (collectionName) => {
  const db = await getDB('goats');
  const collection = await db.collection(collectionName);
  return collection;
};
