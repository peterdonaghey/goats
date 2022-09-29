import express from "express";
import * as routes from './routes';
import * as db from './db/connect';

const app = express();
const port = 5001;

app.use(express.json())

Object.values(routes).forEach((route) => {
  console.log(route);
  app[route.method](route.path, route.handler);
});

const DB_URL = 'mongodb://127.0.0.1:27017';

const start = async () => {
  await db.connect(DB_URL);
  app.listen(port);
  console.log(`Running on port ${port}`);
};

start();
