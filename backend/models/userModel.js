const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema

const userSchema  = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    // firstName: {
    //     type: String,
    //     required: true
    // },
    // lastName: {
    //     type: String,
    //     required: true
    // },
    // isTeacher: {
    //     type: Boolean,
    //     default: false
    // }
})


userSchema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        next(error);
    }

})


const User = mongoose.model("User", userSchema)

module.exports = User;