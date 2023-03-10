import GetReviews from "../../features/Reviews/services/getReviews";
import CreateReview from "../../features/Reviews/services/createReview";

const ReviewPage = ({course}) => {

    return (
        <div>
            <h2>Review page for {course && course.title}</h2>
            <div>
                <GetReviews courseId={course && course._id}/>
            </div>
            <div>
                <CreateReview courseId ={course && course._id}/>
            </div>
        </div>

    )

}

export default ReviewPage;