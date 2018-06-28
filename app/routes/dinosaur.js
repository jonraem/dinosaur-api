var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  // GET
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
  
    // POST
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
};
