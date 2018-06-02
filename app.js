const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello world! And dinosaurs...'));

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
