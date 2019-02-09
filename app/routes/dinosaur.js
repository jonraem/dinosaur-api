var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  // CREATE
  app.post('/dinosaurs', (req, res) => {
    const dinosaur = { name: req.body.name, type: req.body.type };
    db.collection('dinosaurs').insert(dinosaur, (err, result) => {
      if (err) {
        console.error('Error encountered when adding dinosaur');
        res.send({ error: 'An error has occurred.' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // READ
  app.get('/dinosaurs/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('dinosaurs').findOne(details, (err, item) => {
      if (err) {
        console.error(`Error encountered when searching for dinosaur ${id}`);
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  // UPDATE
  app.put('/dinosaurs/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    const details = { _id: new ObjectID(id) };
    const dinosaur = { name: req.body.name, type: req.body.type };
    db.collection('dinosaurs').update(details, dinosaur, (err, result) => {
      if (err) {
        console.error('Error encountered when searching for dinosaur!');
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(dinosaur);
      }
    });
  });

  // DELETE
  app.delete('/dinosaurs/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('dinosaurs').remove(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send('Dinosaur ' + id + ' deleted!');
      }
    });
  });
};
