const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./config/db');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  const dbRef = database.db('dinosaur-db');

  require("./app/routes")(app, dbRef);
  app.listen(port, () => {
    console.log(`Dinosaurs sighted on port ${port}!`);
  });
});
