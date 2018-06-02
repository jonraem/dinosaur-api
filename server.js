const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello world!  🦕'));

require('./app/routes')(app, {});
app.listen(port, () => console.log(`Dinosaurs sighted on port ${port}!`))
