const mongoose = require('mongoose');

const Schema = mongoose.Schema

const enrollmentSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
});


const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;