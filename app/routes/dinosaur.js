module.exports = function(app, db) {
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
