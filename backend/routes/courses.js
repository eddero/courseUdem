const express = require("express");
const courseController = require("../controllers/courseController")
const bodyParser = require("body-parser");


const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", courseController.getCourses)

router.get("/create", courseController.getCourseCreate)

router.post("/", courseController.createCourse)

router.get("/:id", courseController.detailCourse)

router.get("/getAll/:id", courseController.getCoursesUser)






module.exports = router;