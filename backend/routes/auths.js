const express = require("express");
const {register, login, logout, getRegisterForm, getLoginForm, forwardAuthenticated, ensureAuthenticated} = require("../controllers/authController");
const passport = require("passport");

const router = express.Router();


router.get("/", getLoginForm)

router.get("/register", getRegisterForm)

router.post("/register", register)

// router.get("/login",getLoginForm)

router.post("/login",ensureAuthenticated,login)
// passport.authenticate("local", { successRedirect: "/courses/", failureRedirect: "/auths/login?error=true"})

router.post("/logout", logout)


module.exports = router;