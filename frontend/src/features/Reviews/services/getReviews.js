import useGetReviews from "../hooks/useGetReviews";

const GetReviews = ({courseId}) => {

    const {data, error, isLoading} = useGetReviews(courseId)

    if (isLoading) return <p>Loading reviews...</p>;

    if (error) return <p>Error fetching reviews</p>;

    if (!data) return <p>No reviews</p>

    return (
        <div>
            <h2>Reviews of this course</h2>
            <ul>
                {data && data.map((review) => (
                    <div key={review._id}>
                        <li>
                            <div>Stars: {review.rating}</div>
                            <div>Comment: {review.comment}</div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default GetReviews;