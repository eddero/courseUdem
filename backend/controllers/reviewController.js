const Review = require("../models/reviewModel");

const getReviews = async (req, res, next) => {

}

const createReview = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const courseId = req.params.id;

        const existingReview = await Review.findOne({ user: userId, course: courseId});
        if (existingReview) {
            return res.status(404).json({
                message: "Already reviewed"
            })
        }

        const review = new Review({
            user: userId,
            course: courseId,
            rating: req.body.rating,
            comment: req.body.comment,
            date: Date.now()
        })
        await review.save();

        return res.status(201).json({
            message: "Review created successfully",
            Review: review
        })

    } catch (error) {
        next(error);
    }

}

const detailReview = async (req, res, next) => {


}

const getReviewsUser = async (req, res, next) => {

}

const deleteReview = async (req, res, next) => {

}

const updateReview = async (req, res, next) => {


}

module.exports = {
    createReview
}