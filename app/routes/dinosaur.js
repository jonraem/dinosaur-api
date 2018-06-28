var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  // READ
  app.get('/dinosaurs/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('dinosaurs').findOne(details, (err, item) => {
      if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(item);
      }
      });
    });
  
    // CREATE
  app.post('/dinosaurs', (req, res) => {
    const dinosaur = { name: req.body.name, type: req.body.type };
    db.collection('dinosaurs').insert(dinosaur, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred.' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // DELETE
  app.delete('/dinosaurs/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('dinosaurs').remove(details, (err, item) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send('Dinosaur ' + id + ' deleted!');
      } 
    });
  });

  // UPDATE
  app.put('/dinosaurs/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    const details = { '_id': new ObjectID(id) };
    const dinosaur = { name: req.body.name, type: req.body.type };
    db.collection('dinosaurs').update(details, dinosaur, (err, result) => {
      if (err) {
          res.send({ 'error': 'An error has occurred' });
      } else {
          res.send(dinosaur);
      } 
    });
  });
};
