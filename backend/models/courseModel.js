const mongoose = require("mongoose")

const Schema = mongoose.Schema

const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    subject: String,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]

})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;