const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
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
    lessonsCompleted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson'
    }]
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;