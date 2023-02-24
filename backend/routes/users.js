const express = require("express");
const {
    getUser,
    getUsers,
    updateUser,
    updateUserPassword
} = require("../controllers/userController")

const User = require("../models/userModel");


const router = express.Router();

// Get all user
router.get("/", getUsers);

// Get single user
router.get("/:id", getUser)

// update a new user
router.patch("/:id", updateUser)


module.exports = router;