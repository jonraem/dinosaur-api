const dinosaurRoutes = require('./dinosaur');

module.exports = function(app, db) {
  dinosaurRoutes(app, db);
  //otherRoute(app, db);
};
