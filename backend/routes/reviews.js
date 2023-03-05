const express = require("express");
const {createReview} = require("../controllers/reviewController")

const router = express.Router();

router.get("/");

router.get("/:id");

router.post("/:userId/create/:id", createReview);

router.put("/");

router.delete("/delete/:id");

module.exports = router;