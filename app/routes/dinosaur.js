module.exports = function(app, db) {
  app.post('/dinosaurs', (req, res) => {
    // You create your dinosaur here.
    res.send('Rawr! 🦖')
  });
};
