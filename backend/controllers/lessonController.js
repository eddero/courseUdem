const Lesson = require("../models/lessonModel");
const Course = require("../models/courseModel");



const getLesson = (req, res) => {
    res.render('lessons/getLesson');
}

const getLessonCreate = (req, res, next) => {
    try {
        res.render('lessons/createLesson');
    } catch(error) {
        next(error)
    }

}


const createLesson = async (req, res, next) => {
    console.log({req: req.body});
    console.log(req.params)


    try {
        const videoUrl = req.files.video[0].location;
        const thumbnailUrl = req.files.thumbnail[0].location;
        const courseId = req.params.id

        const lesson = new Lesson({
            title: req.body.title,
            description: req.body.description,
            videoUrl: videoUrl,
            thumbnailUrl: thumbnailUrl,
            course: courseId
        });
        await lesson.save();
        return res.status(201).json({
            message: 'Lesson created successfully',
            lesson: lesson
        });
    } catch (error) {
        next(error)
        // return res.status(500).json({
        //     error: error.message
        // });
    }

}

const createLessonText = (req ,res) => {
    console.log({req:req.body.text});

    // Return success or error message to client
    res.json({
        success: true,
        message: "Text submitted successfully"
    });
}

const detailLesson = async (req, res) => {
    try {
        const lessonId = req.params.id;
        console.log(lessonId)
        const lesson = await Course.findById(lessonId);
        if (!lesson) {
            return res.status(404).json({ message: "Course not found" });
        }
        return res.json({ lesson });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const findLessonWithSameId = async (req, res, next)  => {

    try {
        const courseId = req.params.id;
        const images = await Lesson.find({course: courseId});
        console.log(images)

        // res.render("lessons/viewLesson", { images })
        return res.json(images);
    }catch (error) {
        next(error)
    }

}


module.exports = {
    getLessonCreate,
    getLesson,
    createLesson,
    createLessonText,
    detailLesson,
    findLessonWithSameId
}