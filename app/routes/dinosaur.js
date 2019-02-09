var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  // CREATE
  app.post('/dinosaur', (req, res) => {
    const dinosaur = { name: req.body.name, type: req.body.type };
    db.collection('dinosaur').insert(dinosaur, (err, result) => {
      if (err) {
        console.error('Error encountered when adding dinosaur');
        res.send({ error: 'An error has occurred.' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // READ
  app.get('/dinosaur/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('dinosaur').findOne(details, (err, item) => {
      if (err) {
        console.error(`Error encountered when searching for dinosaur ${id}`);
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  // UPDATE
  app.put('/dinosaur/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    const details = { _id: new ObjectID(id) };
    const dinosaur = { name: req.body.name, type: req.body.type };
    db.collection('dinosaur').update(details, dinosaur, (err, result) => {
      if (err) {
        console.error('Error encountered when searching for dinosaur!');
        res.send({ error: 'An error has occurred' });
      } else {
        res.send(dinosaur);
      }
    });
  });

  // DELETE
  app.delete('/dinosaur/:id', (req, res) => {
    const id = req.params.id;
    const details = { _id: new ObjectID(id) };
    db.collection('dinosaur').remove(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occurred' });
      } else {
        res.send('Dinosaur ' + id + ' deleted!');
      }
    });
  });
};
