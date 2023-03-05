const Enrollment = require("../models/enrollmentModel");
const Course = require("../models/courseModel");

const getEnrollments = async (req, res, next) => {


}
const createEnrollment = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const courseId = req.params.id;

        // Check if there is an enrollment for this user and course
        const existingEnrollment = await Enrollment.findOne({ user: userId, course: courseId});
        if (existingEnrollment) {
            return res.status(404).json({
                message: "Already enrolled"
            });
        }

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