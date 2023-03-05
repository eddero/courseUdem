const Enrollment = require("../models/enrollmentModel");
const Course = require("../models/courseModel");

const getEnrollments = async (req, res, next) => {


}
const createEnrollment = async (req, res, next) => {
    console.log(req.params.userId, req.params.id)
    try {
        const userId = req.params.userId;
        const courseId = req.params.id;
        const enrollment = new Enrollment({
            user: userId,
            course: courseId,
            date: Date.now()
        })
        await enrollment.save();
        await Course.findByIdAndUpdate(courseId, { $push: { students: userId }})
        return res.status(201).json({
            message: 'Enrollment created successfully',
            enrollment: enrollment
        });

    } catch (error) {
        next(error);
    }

}
const detailEnrollment = async (req, res, next) => {


}
const getEnrollmentUser = async (req, res, next) => {


}
const deleteEnrollment = async (req, res, next) => {


}
const updateEnrollment = async (req, res, next) => {


}

module.exports = {
    createEnrollment
}