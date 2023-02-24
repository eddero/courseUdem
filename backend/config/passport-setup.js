const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

const User = require("../models/userModel")


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Look up the user by id
    User.findById(id, function (err, user) {
        // If found, call done(null, user)
        // If not found, call done(null, false)
        // If there's an error, call done(err)
        if (err) return done(err)
        if (!user) return done(null, false)
        return done(err, user);
    })

});

passport.use(new LocalStrategy(
    (username, password, done) => {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err, false, { message: "Error searching for user" }) }
            if (!user) { return done(null, false, { message: "Incorrect user or password" }); }

            bcrypt.compare(password, user.password, (err, isMatch)  => {
                if(err) { return done(err, false, { message: "Error while comparing passwords" }); }
                if(isMatch) { return done(null, user); }
                return done(null, false, { message: "Incorrect user or password" });
            })
        });
    }
));

