const express = require("express");
const {createEnrollment} = require("../controllers/enrollmentController")

const router = express.Router();

router.get("/");

router.post("/:userId/create/:id", createEnrollment);

router.get("/:id");



router.put("/");

router.delete("/delete/:id");

module.exports = router;