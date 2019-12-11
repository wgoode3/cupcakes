const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your must give your name!"],
        minlength: [2, "Your name must be 2 characters or longer!"]
    },
    rating: {
        type: Number,
        required: [true, "You must rate the cake!"]
    },
    comment: {
        type: String,
        required: [true, "Comment is required!"],
        minlength: [10, "Your comment must be 10 characters or longer!"]
    }
}, {timestamps: true});

mongoose.model("Review", ReviewSchema);

module.exports = ReviewSchema;