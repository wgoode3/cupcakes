const Cakes = require('../controllers/cakes');

module.exports = function(app) {
    app.get("/cakes", Cakes.getAll);
    app.post("/cakes", Cakes.create);
    app.post("/review/:_id", Cakes.review);
}