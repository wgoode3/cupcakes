const mongoose = require('mongoose');
const ReviewSchema = require('./review');

const CakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The cake cannot be a lie!"],
        minlength: [2, "The cake must have a name 2 characters or longer!"]
    },
    baker: {
        type: String,
        required: [true, "The cake cannot bake itself!"],
        minlength: [2, "The baker's name must be 2 characters longer!"]
    },
    image: {
        type: String
    },
    reviews: [ ReviewSchema ]
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);