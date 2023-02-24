const User = require('../models/userModel');
const passport = require('passport');
// const CustomError = require('../errors');


const getRegisterForm = (req, res, next) => {
    try {
        res.render('auths/register');
    } catch (error) {
        next(error)
    }

}

const register = async (req, res, next) => {
    console.log(req.body)
    try {
        const {email, username, password} = req.body;

        const emailAlreadyExists = await User.findOne({email})
        if (emailAlreadyExists) {
            return res.status(400).send({error: "Email already exist"})
        }

        const user = new User({
            email,
            username,
            password
        })

        await user.save();
        res.status(201).json({message: "User save"})

    } catch (err) {
        next(err)
    }
}

const getLoginForm = async (req, res, next) => {
    try {
        res.render('auths/login');
    } catch (error) {
        next(error)
    }

}

const login = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.status(400).send({ message: info.message }); }

        req.logIn(user, (err) => {
            if (err)  return next(err);
            console.log("Login successful", {user: req.user, session: req.session, sessionId: req.session.id})
            return res.send({ message: 'Login successful', user: req.user, session: req.session, sessionId: req.session.id});

        });

    })(req, res, next);
}


const logout = async (req, res) => {
    req.session.destroy(() => res.json({success: true}))
}

const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("already logged in",req.session);
        return res.send({message: "Already logged in"});
    }
    next();
}

const forwardAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) return next;
    res.redirect("/");
}




module.exports = {
    register,
    login,
    logout,
    getRegisterForm,
    getLoginForm,
    ensureAuthenticated,
    forwardAuthenticated
};