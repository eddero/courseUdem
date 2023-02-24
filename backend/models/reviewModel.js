const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: String,
    date: {
        type: Date,
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;