const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => res.send('Hello world! 🦕'));

const port = 3000;
app.listen(port, () => console.log(`Dinosaurs sighted on port ${port}!`))
