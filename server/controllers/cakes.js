const mongoose = require('mongoose');
const Cake = mongoose.model("Cake");
const Review = mongoose.model("Review");

class CakeController {

    getAll(req, res) {
        Cake.find({})
            .then(cakes => res.json(cakes))
            .catch(err => res.json(err));
    }

    create(req, res) {
        const cake = new Cake(req.body);
        cake.save()
            .then(() => res.json({'msg': 'cake is operational'}))
            .catch(err => res.json(err));
    }

}

module.exports = new CakeController();