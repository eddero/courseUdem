const express = require("express");
const lessonController = require("../controllers/lessonController");


const {Upload} = require("../s3Service");
const bodyParser = require("body-parser");
const multer = require("multer");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", lessonController.getLesson)

router.get("/:id/create", lessonController.getLessonCreate)


router.post("/:id/lessons", Upload.fields([
    { name: "video", maxCount: 1 },
    { name: "thumbnail", maxCount: 1}]), lessonController.createLesson)


router.get("/:id",  lessonController.findLessonWithSameId)





router.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE"){
            return res.json({
                message: "file is to large"
            })
        }
    }
})


module.exports = router;
