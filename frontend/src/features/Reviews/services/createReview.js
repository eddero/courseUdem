import ReviewForm from "../components/ReviewForm";
import useCreateReview from "../hooks/useCreateReview";

const CreateReview = (courseId) => {
    const {createReview, error, isLoading} = useCreateReview(courseId);

    if (isLoading) return <p>Loading review creation</p>

    if (error) return <p>Error review creation</p>

    return (
        <div>
            <h2>Review this course</h2>
            <ReviewForm onSubmit={createReview}/>
        </div>
    )
}

export default CreateReview;