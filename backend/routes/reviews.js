const express = require("express");
const {} = require("../controllers/reviewController")

const router = express.Router();

router.get("/");

router.get("/:id");

router.post("/");

router.put("/");

router.delete("/delete/:id");

module.exports = router;