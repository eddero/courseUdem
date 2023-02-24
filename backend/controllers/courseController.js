const Course = require("../models/courseModel")
const User = require("../models/userModel");


const getCourses = async (req, res) => {
    const courses = await Course.find().sort({createdAt: -1})

    res.status(200).json(courses)
    // res.render("courses/getCourses", {courses})
}
const getCourseCreate = async (req, res) => {
    res.render("courses/createCourse")
}


const createCourse = async (req, res) => {
    console.log({req: req.body});
    console.log(req.body.id);

    try {
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            students: req.body.students
        });
        await course.save();
        return res.status(201).json({
            message: 'Course created successfully',
            course: course
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }

}

const detailCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        console.log(courseId)
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({message: "Course not found"});
        }
        return res.json(course);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

const getCoursesUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "user not found"});
        }
        const courses = await Course.find({teacher: user._id});
        return res.json(courses);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    createCourse,
    getCourseCreate,
    detailCourse,
    getCourses,
    getCoursesUser
}