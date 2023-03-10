const Review = require("../models/reviewModel");

const getReviewsOfCourse = async (req, res, next) => {

    try {
        const courseId = req.params.id
        const reviews = await Review.find({course: courseId}).sort({createdAt: -1});

        if (reviews.length === 0) {
            return res.status(404).json({
                message: `No reviews found for course with id ${courseId}`
            });
        }

        res.status(200).json(reviews);

    } catch (error) {
        next(error);
    }

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
    createReview,
    getReviewsOfCourse
}