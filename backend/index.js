require("dotenv").config()

// Passport Config
require('./config/passport-setup');

const express = require("express")
const mongoose = require("mongoose").default
const bodyParser = require("body-parser");
const path = require("path");
const uuid = require("uuid").v4
const pug = require('pug');

// import routes
const userRoutes = require("./routes/users")
const courseRoutes = require("./routes/courses")
const enrollmentRoutes = require("./routes/enrollments")
const progressRoutes = require("./routes/progresses")
const reviewRoutes = require("./routes/reviews")
const lessonRoutes = require("./routes/lessons")
const authRoutes = require("./routes/auths")

const passport = require("passport");
const session = require("express-session");
const cookieSession = require('cookie-session');



const app = express();


const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("Something went wrong. Please try again later. ");
};

// middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));



app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        // Equals 1 day
        maxAge: 1000 * 60 * 60 * 24
    }
}))
app.use(express.urlencoded({ extended: false}))

// set views
app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'pug')


// Passport,js
app.use(passport.initialize());
app.use(passport.session())



// routes
app.use("/users", userRoutes)
app.use("/courses", courseRoutes)
app.use("/progresses", progressRoutes)
app.use("/reviews", reviewRoutes)
app.use("/enrollments", enrollmentRoutes)
app.use("/lessons", lessonRoutes)
app.use("/auths", authRoutes)





// error handler at the end
app.use(errorHandler);


app.get('/', function(req, res, next) {

    if (req.isAuthenticated()) {
        res.send(`Welcome, ${req.user.username}!`);
    } else {
        res.send('Please log in');
    }

    //
    // if (!req.session.views) {
    //     req.session.views = 0;
    // }
    // req.session.views++;
    // res.send(`Views: ${req.session.views}`);

    // res.render('index')
})



// set database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        app.listen(4000, () => {
            console.log(`Sever running on port ${process.env.PORT}`)})

    })
    .catch((error) => {
        console.log(error);
    })


// 404 page
app.use((req, res) => {
    res.status(404);
});
