const express = require("express");
const {createReview, getReviewsOfCourse} = require("../controllers/reviewController")

const router = express.Router();

router.get("/");

router.get("/:id", getReviewsOfCourse);

router.post("/:userId/create/:id", createReview);

router.put("/:id");

router.delete("/delete/:id");

module.exports = router;